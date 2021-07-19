import { DataTypes, Model } from 'sequelize';
import db from '../config/database.config';

interface IImageDetail {
  id: string,
  category_id: string,
  image_list_id: string,
  title: string,
  description: string,
  views: number,
  creation_date: Date,
  upload_date: Date,
  tags: string,
  fullimage_url: string
}

export class ImageDetail extends Model<IImageDetail> {}

ImageDetail.init(
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
    image_list_id: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    views: {
      type: DataTypes.NUMBER,
    },
    creation_date: {
      type: DataTypes.STRING,
    },
    upload_date: {
      type: DataTypes.STRING,
    },
    tags: {
      type: DataTypes.STRING,
    },
    fullimage_url: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize: db,
    tableName: 'image_details'
  }
);