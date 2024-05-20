import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configModel: ConfigModel;
  
  constructor(private http: HttpClient) {}

  loadConfig() {
    return this.http
      .get<ConfigModel>('../../assets/config.json')
      .toPromise()
      .then(config => {
        this.configModel = config;
      });
  }
}
