import { ConvenienceData } from '../../entities/convenience/convenience-data';

export interface IConvenienceRepository {
  registerConvenienceStore(convenienceData: ConvenienceData): Promise<ConvenienceData>;
  getClosestConvenienceStore(coordinates: { lat: number; lng: number }): Promise<any>;
}
