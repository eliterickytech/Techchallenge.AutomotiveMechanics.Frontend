import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ManufacturerService } from '../../../service/manufacturer.service';
import { ManufacturerModel } from '../../../models/manufacturer.model';

@Component({
  selector: 'app-manufacturer-add',
  templateUrl: './manufacturer-add.component.html'
})
export class ManufacturerAddComponent {
  manufacturerModel = new ManufacturerModel();
  constructor(private manufacturerService: ManufacturerService, private snackbar: MatSnackBar, private router: Router) { }

  formSubmit(f: NgForm) {
    this.addManufacturer(f);
  }

  addManufacturer(form: NgForm) {
    if (form.valid) {
      this.manufacturerModel.name = form.value.name;
      
      this.manufacturerService.add(form.value).subscribe(res => {
        if (res != null) {
          this.snackbar.open('Cadastrado com sucesso!', 'close', {duration: 6000})
          this.router.navigate(['/manufacturer']);
        }
      });
    }
  }
}
