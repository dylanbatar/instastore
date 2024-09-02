import { ConvenienceData } from '../../../entities/convenience/convenience-data';
import { IConvenienceRepository } from '../../ports/convenience-repository';

export class RegisterConvenienceStore {
  private convenienceRepository: IConvenienceRepository;

  constructor(convenienceRepository: IConvenienceRepository) {
    this.convenienceRepository = convenienceRepository;
  }

  async registerConvenienceStore(convenienceData: ConvenienceData): Promise<ConvenienceData> {
    return this.convenienceRepository.registerConvenienceStore(convenienceData);
  }
}
