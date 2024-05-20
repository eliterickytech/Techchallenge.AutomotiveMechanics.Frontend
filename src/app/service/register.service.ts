import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../models/register.model';
import { ConfigService } from './config.service';
import { BaseService } from './base-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService{

  constructor(private http: HttpClient, configService: ConfigService) { 
    super(configService);
  }

  register(params: RegisterModel) : Observable<any> {
    const url = `${this.baseUrl}/Api/v1/User/Register`;
    return this.http.post(url, params);
  }
}
