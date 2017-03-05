import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  public production: boolean = environment.production;

  constructor() { }

}
