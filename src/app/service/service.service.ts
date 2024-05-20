import { Injectable } from '@angular/core';
import { BaseService } from './base-service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { carModel } from '../models/car.model';
import { ServiceModel } from '../models/service.mode';
import { Observable } from 'rxjs';
import { ServiceResultModel } from '../models/result/service-result.mode';

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends BaseService{

  constructor(private http: HttpClient, configService: ConfigService) { 
    super(configService);
  }

  list(): Observable<ServiceResultModel>{
    const url = `${this.baseUrl}/Api/v1/Service`;
    return this.http.get<ServiceResultModel>(url, { headers: this.headers });
  
  }

  add(params: ServiceModel) {
    const url = `${this.baseUrl}/Api/v1/Service`;
    return this.http.post(url, params, { headers: this.headers });
  }
}
