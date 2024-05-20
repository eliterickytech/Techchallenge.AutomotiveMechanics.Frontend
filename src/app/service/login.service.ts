import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { BaseService } from './base-service';
import { ConfigService } from './config.service';
import { LoginResultModel } from '../models/result/login-result.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService{

  constructor(private http: HttpClient, configService: ConfigService) { 
    super(configService);
  }

  login(params: LoginModel): Observable<any> {
    const url = `${this.baseUrl}/Api/v1/User/Login`;
    return this.http.post<LoginResultModel>(url, params)
      .pipe(tap(res => {
        if (res.data?.token != null) {
          localStorage.setItem('userLogged', JSON.stringify(res));
        };
      }))
  }

  get isLoggedIn(): boolean {
    let userLogged: LoginResultModel = JSON.parse(localStorage.getItem("userLogged"));
    return (userLogged?.data?.token !== null) ? true : false;
  }
  get userLogged(): LoginResultModel {
    
    let userLogged: LoginResultModel = JSON.parse(localStorage.getItem("userLogged"));

    if (userLogged?.data?.token == null) return null;

    let user = new LoginResultModel();
    user.data.name = userLogged.data.name;
    user.data.email = userLogged.data.email;
    return user;
  }
}
