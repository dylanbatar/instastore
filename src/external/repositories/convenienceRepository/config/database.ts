import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(process.env.DB_NAME, 'root','root', {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  logging: true
});
