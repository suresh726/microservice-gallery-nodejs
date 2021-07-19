import { Sequelize } from 'sequelize';

const db = new Sequelize('category-db', '', '', {
  storage: './database.sqlite',
  dialect: 'sqlite',
  logging: false
});

export default db;