import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  _apiURI : string;
  constructor() {
    this._apiURI = 'http://5a5cd076d6221a0012962d2d.mockapi.io/api/products';
   }

   getApiUrl()
   {
     return this._apiURI;
   }
}
