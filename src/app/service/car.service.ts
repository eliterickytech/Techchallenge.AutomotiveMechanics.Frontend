import { Injectable } from '@angular/core';
import { BaseService } from './base-service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { CarResultModel } from '../models/result/car-result.model';
import { Observable } from 'rxjs';
import { carModel } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService extends BaseService {

  constructor(private http: HttpClient, configService: ConfigService) { 
    super(configService);
  }

  list(): Observable<CarResultModel> {
    const url = `${this.baseUrl}/Api/v1/Car`;
    return this.http.get<CarResultModel>(url, { headers: this.headers });
  }

  add(params: carModel): Observable<any> {
    const url = `${this.baseUrl}/Api/v1/Car`;
    return this.http.post(url, params, { headers: this.headers });
  }

  get(id: number): Observable<any> {
    const url = `${this.baseUrl}/Api/v1/Car/${id}`;
    return this.http.get(url, { headers: this.headers });
  }
}
