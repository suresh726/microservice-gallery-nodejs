import express, { Request, Response } from 'express';
import { NotFoundError } from '@slcdemogallery/common';

import { Category } from '../models/category.model';
import { CategoryDeletedPublisher } from '../events/category-deleted-publisher';
import { rabbitmqWrapper } from '../rabbitmq-wrapper';

const router = express.Router();

router.delete('/api/categories/:id', async (req: Request, res: Response) => {
  const category = await Category.findOne({ where: { id: req.params.id } });
  console.log(req.params.id);
  console.log(category);
  if (!category) {
    throw new NotFoundError();
  }

 
  await category.destroy();

  // publishing updated test
  // Publish event
  new CategoryDeletedPublisher(rabbitmqWrapper!.channel!).publish({
    id: req.params.id
  });

  res.status(204).send({});
})

export { router as deleteCategoryRouter };