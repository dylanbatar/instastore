import { ConvenienceData } from '../../../entities/convenience/convenience-data';
import { IConvenienceRepository } from '../../ports/convenience-repository';

export class GetClosestConvenienceStore {
  private convenienceRepository: IConvenienceRepository;

  constructor(convenienceRepository: IConvenienceRepository) {
    this.convenienceRepository = convenienceRepository;
  }

  async getClosestConvenienceStore(coordinates: { lat: number; lng: number }): Promise<ConvenienceData[]> {
    const stores = await this.convenienceRepository.getClosestConvenienceStore(coordinates);
    return stores;
  }
}
