import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  NotFoundError,
} from '@slcdemogallery/common';

import { Category } from '../models/category.model';
import { rabbitmqWrapper } from '../rabbitmq-wrapper';
import { CategoryUpdatedPublisher } from '../events/category-updated-publisher';

const router = express.Router();

router.put(
  '/api/categories/:id',
  [
    body('title').not().isEmpty().withMessage('Title is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const category = await Category.findOne({ where: { id: req.params.id } });

    if (!category) {
      throw new NotFoundError();
    }

    await category!.update({ title: req.body.title });

    new CategoryUpdatedPublisher(rabbitmqWrapper!.channel!).publish({
      id: req.params.id,
      title: category.getDataValue('title'),
    });

    res.send(category);


  });

export { router as updateCategoryRouter };