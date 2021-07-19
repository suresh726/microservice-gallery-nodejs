import { NotAuthorizedError, NotFoundError, validateRequest } from '@slcdemogallery/common';
import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { body } from 'express-validator';
import { User } from '../models/user.model';
import { Password } from '../services/password';

const router = express.Router();

router.post(
  '/api/users/signin',
  [
    body('email').not().isEmpty().withMessage('Valid email is required'),
    body('password').not().isEmpty().withMessage('Password is required')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userInDB = await User.findOne({ where: { email } });
    
    if (!userInDB) {
      throw new NotAuthorizedError();
    }

    const passwordMatch = await Password.compare(
      userInDB.getDataValue('password'),
      password,
    );

    if (!passwordMatch) {
      throw new NotAuthorizedError();
    }

    const userJwt = jwt.sign({ 
      id: userInDB.getDataValue('id'), 
      fullname: userInDB.getDataValue('fullname'), 
      email
    }, process.env.JWT_KEY!);

    // Store it on session object
    req.session = {
      jwt: userJwt
    };

    res.status(201).send({ token: userJwt });
});

export { router as signinRouter };