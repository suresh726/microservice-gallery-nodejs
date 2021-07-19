import { NotAuthorizedError, NotFoundError, validateRequest } from '@slcdemogallery/common';
import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import { UserRegisteredPublisher } from '../events/user-registered-publisher';
import { User } from '../models/user.model';
import { rabbitmqWrapper } from '../rabbitmq-wrapper';
import { Password } from '../services/password';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('fullname').not().isEmpty().withMessage('Fullname is required'),
    body('email').not().isEmpty().withMessage('Valid email is required'),
    body('password').not().isEmpty().withMessage('Password is required')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { fullname, email, password } = req.body;

    const userInDB = await User.findOne({ where: { email } });
    
    if (userInDB) {
      throw new Error('Email is already taken');
    }

    const id = uuidv4();
    const hashed = await Password.toHash(password);

    const user = await User.create({ id, fullname, email, password: hashed });

    if (!user) {
      throw new Error('Could not create user in db');
    }

    const userJwt = jwt.sign({ id, email, fullname }, process.env.JWT_KEY!);
    
    // Store it on session object
    req.session = {
      jwt: userJwt
    };
    
    new UserRegisteredPublisher(rabbitmqWrapper!.channel!).publish({ email, fullname });
    res.status(201).send({ token: userJwt });
});

export { router as signupRouter };