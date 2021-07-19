import { DataTypes, Model } from 'sequelize';
import db from '../config/database.config';

interface ICategory {
  id: string
  title: string
}

export class Category extends Model<ICategory> { }

Category.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    tableName: 'categories'
  }
);