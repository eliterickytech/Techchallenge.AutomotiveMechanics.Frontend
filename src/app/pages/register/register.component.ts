import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router }    from '@angular/router';
import { NgForm }    from '@angular/forms';
import { AppSettings } from '../../service/app-settings.service';
import { RegisterModel } from '../../../app/models/register.model';
import { RegisterService } from '../../../app/service/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnDestroy {

  registerModel: RegisterModel = new RegisterModel();

  constructor(
    private router: Router, 
    private renderer: Renderer2, 
    private registerService: RegisterService,
    private snackBar: MatSnackBar,
    public appSettings: AppSettings) {
    this.appSettings.appEmpty = true;
    this.renderer.addClass(document.body, 'bg-white');
  }

  ngOnDestroy() {
    this.appSettings.appEmpty = false;
    this.renderer.removeClass(document.body, 'bg-white');
  }

  formSubmit(f: NgForm) {
    this.registerUser(f);
  }

  registerUser(f: NgForm) {
    
    this.registerModel.email = f.value.email;
    this.registerModel.password = f.value.password;
    this.registerModel.name = f.value.name;

    this.registerService.register(this.registerModel).subscribe(response => {
      if (response) {
        this.snackBar.open('Cadastrado com Sucesso', 'Close', {duration: 6000})
        this.router.navigate(['/login']);
      }
      else{
        this.snackBar.open('Erro', 'Close', {duration: 6000})
      }
    });
  }
}
