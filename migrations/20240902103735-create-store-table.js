'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stores', {
      storeId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      storeName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isOpen: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      coordinates: {
        type: Sequelize.GEOMETRY('POINT'),
        allowNull: false,
      },
      indexLocation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('stores');
  }
};
