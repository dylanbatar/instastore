import Store from '../models/convenience-store';
import { sequelize } from './database';

export const syncDatabase = async () => {
  try {
    // await sequelize.authenticate();
    await sequelize.sync({ force: false });

    // await Store.bulkCreate([
    //   {
    //     storeName: 'Tienda 1',
    //     isOpen: true,
    //     coordinates: { type: 'Point', coordinates: [10.9878, -74.7889] },
    //     indexLocation: 'XYZ123'
    //   },
    //   {
    //     storeName: 'Tienda 2',
    //     isOpen: false,
    //     coordinates: { type: 'Point', coordinates: [10.987, -74.781] },
    //     indexLocation: 'XYZ124'
    //   },
    //   {
    //     storeName: 'Tienda 3',
    //     isOpen: true,
    //     coordinates: { type: 'Point', coordinates: [10.98, -74.78] },
    //     indexLocation: 'XYZ125'
    //   },
    //   {
    //     storeName: 'Tienda 4',
    //     isOpen: true,
    //     coordinates: { type: 'Point', coordinates: [10.99, -74.785] },
    //     indexLocation: 'XYZ126'
    //   }
    // ]);
    const lat = 10.987;
    const lon = -74.78;

    // const nearbyStores = await Store.findAll({
    //   attributes: [
    //     'storeName',
    //     'isOpen',
    //     'indexLocation',
    //     [
    //       sequelize.fn(
    //         'ST_Distance',
    //         sequelize.col('coordinates'),
    //         sequelize.fn('ST_SetSRID', sequelize.fn('ST_MakePoint', lat, lon), 4326)
    //       ),
    //       'distance'
    //     ]
    //   ],
    //   order: sequelize.literal('distance ASC'),
    //   limit: 3, // Puedes limitar el número de resultados si lo deseas
    //   raw: true
    // });

    // console.log(nearbyStores);
    

    console.log('Connection successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    // await sequelize.close();
  }
};
