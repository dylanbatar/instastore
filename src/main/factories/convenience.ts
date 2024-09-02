// convenience factory

import { GetClosetsConvenienceController, RegisterConvenienceController } from '../../adapters/convenience';
import { GetClosestConvenienceStore } from '../../usecases/convenience/search/get-closets-convenience-store';
import { RegisterConvenienceStore } from '../../usecases/convenience/register/registry-convenience-store';
import { ConvenienceRepository } from '../../external/repositories/convenienceRepository/queries/repository';

const convenienceRepository = new ConvenienceRepository();

export const makeRegisterConvenienceController = (): RegisterConvenienceController => {
  const registerConvenienceStore = new RegisterConvenienceStore(convenienceRepository);
  const registerConvenienceController = new RegisterConvenienceController(registerConvenienceStore);
  return registerConvenienceController;
};

export const makeGetConvenienceController = (): GetClosetsConvenienceController => {
  const getClosestConvenienceStore = new GetClosestConvenienceStore(convenienceRepository);
  const getConvenienceController = new GetClosetsConvenienceController(getClosestConvenienceStore);
  return getConvenienceController;
};
