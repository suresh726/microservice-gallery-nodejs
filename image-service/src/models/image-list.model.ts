import { DataTypes, Model } from 'sequelize';
import db from '../config/database.config';

interface IImageList {
  id: string,
  category_id: string,
  title: string,
  flickr_image_id: string,
  thumbnail_url: string
}

export class ImageList extends Model<IImageList> { }

ImageList.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flickr_image_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    thumbnail_url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    tableName: 'image_lists'
  }
);