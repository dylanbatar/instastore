'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('stores', [
      {
        storeName: 'Tienda 1',
        isOpen: true,
        coordinates: Sequelize.fn('ST_GeomFromText', 'POINT(10.9878 -74.7889)'),
        indexLocation: 'XYZ123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        storeName: 'Tienda 2',
        isOpen: false,
        coordinates: Sequelize.fn('ST_GeomFromText', 'POINT(10.987 -74.781)'),
        indexLocation: 'XYZ124',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        storeName: 'Tienda 3',
        isOpen: true,
        coordinates: Sequelize.fn('ST_GeomFromText', 'POINT(10.98 -74.78)'),
        indexLocation: 'XYZ125',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        storeName: 'Tienda 4',
        isOpen: true,
        coordinates: Sequelize.fn('ST_GeomFromText', 'POINT(10.99 -74.785)'),
        indexLocation: 'XYZ126',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        storeName: 'Tienda 5',
        isOpen: false,
        coordinates: Sequelize.fn('ST_GeomFromText', 'POINT(10.96 -74.77)'),
        indexLocation: 'XYZ127',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        storeName: 'Tienda 6',
        isOpen: true,
        coordinates: Sequelize.fn('ST_GeomFromText', 'POINT(10.95 -74.76)'),
        indexLocation: 'XYZ128',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        storeName: 'Tienda 7',
        isOpen: true,
        coordinates: Sequelize.fn('ST_GeomFromText', 'POINT(10.94 -74.765)'),
        indexLocation: 'XYZ129',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        storeName: 'Tienda 8',
        isOpen: false,
        coordinates: Sequelize.fn('ST_GeomFromText', 'POINT(10.93 -74.76)'),
        indexLocation: 'XYZ130',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        storeName: 'Tienda 9',
        isOpen: true,
        coordinates: Sequelize.fn('ST_GeomFromText', 'POINT(10.92 -74.755)'),
        indexLocation: 'XYZ131',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        storeName: 'Tienda 10',
        isOpen: true,
        coordinates: Sequelize.fn('ST_GeomFromText', 'POINT(10.91 -74.75)'),
        indexLocation: 'XYZ132',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('stores', null, {});
  }
};
