import { Sequelize } from 'sequelize';

const db = new Sequelize('user-db', '', '', {
  storage: './database.sqlite',
  dialect: 'sqlite',
  logging: false
});

export default db;