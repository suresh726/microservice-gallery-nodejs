import { DataTypes, Model } from 'sequelize';
import db from '../config/database.config';

interface IUser {
  id: string
  fullname: string,
  email: string,
  password: string
}

export class User extends Model<IUser> { }

User.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    tableName: 'users'
  }
);