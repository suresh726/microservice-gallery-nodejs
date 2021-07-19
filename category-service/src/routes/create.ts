import { validateRequest } from '@slcdemogallery/common';
import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import { CategoryCreatedPublisher } from '../events/category-created-publisher';

import { Category } from '../models/category.model';
import { rabbitmqWrapper } from '../rabbitmq-wrapper';

const router = express.Router();

router.post(
  '/api/categories',
  [
    body('title').not().isEmpty().withMessage('Title is required')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const title = req.body.title;
    const id = uuidv4();
    const category = await Category.create({ id, title });

    if (!category) {
      throw new Error('Could not create category in db');
    }
    /* TODO log category-create */

    /* publishing an event category:create */
    new CategoryCreatedPublisher(rabbitmqWrapper!.channel!).publish({ id, title });

    res.status(201).send(category);

});

export { router as createCategoryRouter };