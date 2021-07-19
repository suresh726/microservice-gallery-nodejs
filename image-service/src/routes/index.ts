import { NotFoundError } from '@slcdemogallery/common';
import express, { Request, Response } from 'express';
import { Category } from '../models/category.model';
import { ImageDetail } from '../models/image-detail.model';
import { ImageList } from '../models/image-list.model';

const router = express.Router();

router.get('/api/image-list/:category_id', async (req: Request, res: Response) => {

  const category_id = req.params.category_id;
  console.log(category_id);
  const category = await Category.findOne({ where: { id: category_id } });

  if (!category) {
    throw new NotFoundError();
  }

  const images = await ImageList.findAll({ where: { category_id  } });
  res.send({category, images});
});



router.get('/api/image-detail/:image_list_id', async (req: Request, res: Response) => {
  const image_list_id = req.params.image_list_id;
  const image = await ImageDetail.findOne({ where: { image_list_id } });

  if (!image) {
    throw new NotFoundError();
  }

  const category_id = image.getDataValue('category_id')
  const category = await Category.findOne({ where: { id: category_id } });


  res.send({category, image});
});

export { router as indexImageRouter };