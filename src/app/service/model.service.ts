import { Injectable } from '@angular/core';
import { BaseService } from './base-service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { ModelModel } from '../models/model.model';
import { Observable } from 'rxjs';
import { ModelResultModel } from '../models/result/model-result.model';

@Injectable({
  providedIn: 'root'
})
export class ModelService extends BaseService{

  constructor(private http: HttpClient, configService: ConfigService) { 
    super(configService);
  }

  list(): Observable<ModelResultModel> {
    const url = `${this.baseUrl}/Api/v1/Model`;
    return this.http.get<ModelResultModel>(url, { headers: this.headers });
  }

  add(params: ModelModel): Observable<any> {
    const url = `${this.baseUrl}/Api/v1/Model`;
    return this.http.post(url, params, { headers: this.headers });
  }
}
