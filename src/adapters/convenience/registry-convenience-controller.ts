// register a convenience store

import { ConvenienceData } from '../../entities/convenience/convenience-data';
import { RegisterConvenienceStore } from '../../usecases/convenience/register/registry-convenience-store';
import { serverError, successRequest } from '../helpers/http.helper';
import { HttpRequest, HttpResponse } from '../ports/http';

export class RegisterConvenienceController {
  private readonly registryConvenienceUseCase: RegisterConvenienceStore;

  constructor(registryConvenienceUseCase: RegisterConvenienceStore) {
    this.registryConvenienceUseCase = registryConvenienceUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const convenience: ConvenienceData = {
        storeId: httpRequest.body.storeId,
        storeName: httpRequest.body.storeName,
        isOpen: httpRequest?.body.isOpen,
        coordinates: {
          lat: httpRequest.body.coordinates.lat,
          lng: httpRequest.body.coordinates.lng
        },
        indexLocation: null
      };

      await this.registryConvenienceUseCase.registerConvenienceStore(convenience);
      return successRequest(convenience);
    } catch (error: any) {
      return serverError(error.message);
    }
  }
}
