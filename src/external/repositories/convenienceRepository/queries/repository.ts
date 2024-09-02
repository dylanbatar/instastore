import sequelize from 'sequelize';
import { ConvenienceData } from '../../../../entities/convenience/convenience-data';
import { IConvenienceRepository } from '../../../../usecases/ports/convenience-repository';
import Store from '../models/convenience-store';

export class ConvenienceRepository implements IConvenienceRepository {
  public async registerConvenienceStore(convenienceData: ConvenienceData): Promise<ConvenienceData> {
    try {
      await Store.create({
        storeName: convenienceData.storeName,
        isOpen: convenienceData.isOpen,
        coordinates: { type: 'Point', coordinates: [convenienceData.coordinates.lat, convenienceData.coordinates.lng] },
        indexLocation: convenienceData.indexLocation
      });

      return convenienceData;
    } catch (error) {
      console.error(`error registering convenience store: ${error}`);
      return error;
    }
  }

  public async getClosestConvenienceStore(coordinates: { lat: number; lng: number }): Promise<ConvenienceData[]> {
    try {
      const nearbyStores = await Store.findAll({
        attributes: [
          'storeName',
          'isOpen',
          'indexLocation',
          [
            sequelize.fn(
              'ST_Distance',
              sequelize.col('coordinates'),
              sequelize.fn('ST_SetSRID', sequelize.fn('ST_MakePoint', coordinates.lng, coordinates.lat), 4326)
            ),
            'distance'
          ]
        ],
        order: sequelize.literal('distance ASC'),
        limit: 3,
        raw: true
      });
      return nearbyStores as any;
    } catch (error) {
      console.error(`error getting convenience store: ${error}`);
      return error;
    }
  }
}
