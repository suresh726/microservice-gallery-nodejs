import express, { Request, Response } from 'express';
import { Category } from '../models/category.model';

const router = express.Router();

router.get('/api/categories', async (req: Request, res: Response) => {
  const categories = await Category.findAll({ where: {} });
  res.send(categories);
});

export { router as indexCategoryRouter };