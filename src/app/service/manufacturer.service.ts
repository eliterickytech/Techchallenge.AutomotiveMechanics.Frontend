import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { BaseService } from './base-service';
import { Observable } from 'rxjs';
import { ManufacturerModel } from '../models/manufacturer.model';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService extends BaseService {

  constructor(private http: HttpClient, configService: ConfigService) { 
    super(configService);
  }

  get(): Observable<any> {
    const url = `${this.baseUrl}/Api/v1/Manufacturer`;
    return this.http.get(url, { headers: this.headers });
  }

  add(params: ManufacturerModel): Observable<any> {
    const url = `${this.baseUrl}/Api/v1/Manufacturer`;
    return this.http.post(url, params, { headers: this.headers });
  }
}

