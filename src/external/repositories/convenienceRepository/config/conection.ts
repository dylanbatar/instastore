import { sequelize } from './database';

export const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Connection successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    // await sequelize.close();
  }
};
