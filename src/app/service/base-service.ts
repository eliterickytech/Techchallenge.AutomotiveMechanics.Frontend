import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { LoginResultModel } from '../models/result/login-result.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected baseUrl: string;
  protected headers = new HttpHeaders();
  
  constructor(configService: ConfigService) { 

    const userLogged: LoginResultModel = JSON.parse(localStorage.getItem("userLogged"));

    this.baseUrl = configService.configModel.baseUrl;
    
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    
    if (userLogged != null) {
      this.headers = this.headers.append('Authorization', `Bearer ${userLogged.data.token}`);
    }
  }
}
