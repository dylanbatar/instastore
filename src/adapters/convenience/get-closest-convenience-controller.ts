// get the closest convenience store to the given coordinates

import { GetClosestConvenienceStore } from '../../usecases/convenience/search/get-closets-convenience-store';
import { serverError, successRequest } from '../helpers/http.helper';
import { HttpRequest, HttpResponse } from '../ports/http';

export class GetClosetsConvenienceController {
  private getClosestConvenienceUseCase: GetClosestConvenienceStore;

  constructor(getClosestConvenienceUseCase: GetClosestConvenienceStore) {
    this.getClosestConvenienceUseCase = getClosestConvenienceUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const coordinates: { lat: number; lng: number } = {
        lat: httpRequest.body.coordinates.lat,
        lng: httpRequest.body.coordinates.lng
      };

      const stores = await this.getClosestConvenienceUseCase.getClosestConvenienceStore(coordinates);
      return successRequest(stores);
    } catch (error: any) {
      return serverError(error.message);
    }
  }
}
