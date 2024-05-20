import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppSettings } from '../../service/app-settings.service';
import { LoginService } from '../../service/login.service';
import { LoginModel } from '../../models/login.model';
import { LoginResultModel } from '../../../app/models/result/login-result.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnDestroy {
  
  login: LoginModel = new LoginModel();

  constructor(
    private router: Router, 
    private renderer: Renderer2, 
    public appSettings: AppSettings,
    private snackBar: MatSnackBar,
    private loginService: LoginService) {
    this.appSettings.appEmpty = true;
    this.renderer.addClass(document.body, 'bg-white');
  }

 
  ngOnDestroy() {
    this.appSettings.appEmpty = false;
    this.renderer.removeClass(document.body, 'bg-white');
  }

  formSubmit(f: NgForm) {   
    this.loginUser();
  }

  loginUser() {
    this.loginService.login(this.login).subscribe((response: LoginResultModel ) => {
      if (response?.data.token != null) {
        this.router.navigate(['/home']);
      }
      else{
        this.snackBar.open(response.data.message, 'Close', {duration: 6000})
      }
    });
  }
}
