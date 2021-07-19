import { Sequelize } from 'sequelize';

const db = new Sequelize('db-name', '', '', {
  storage: './database.sqlite',
  dialect: 'sqlite',
  logging: false
});

export default db;