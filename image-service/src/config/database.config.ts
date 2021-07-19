import { Sequelize } from 'sequelize';

const db = new Sequelize('image-db', '', '', {
  storage: './database.sqlite',
  dialect: 'sqlite',
  logging: false
});

export default db;