import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CarResultModel } from '../../../models/result/car-result.model';
import { CarService } from '../../../service/car.service';
import { ModelService } from '../../../service/model.service';
import { ModelResultModel } from '../../../models/result/model-result.model';
import { carModel } from '../../../models/car.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html'
})
export class CarAddComponent implements OnInit{

  modelResultModel: ModelResultModel = new ModelResultModel();
  carModel: carModel = new carModel();

  constructor(private carService: CarService, private modelService: ModelService, private snackBar: MatSnackBar, private router: Router ) { }

  ngOnInit(): void {
    this.listModel();
  }

  listModel(){
    this.modelService.list().subscribe((response: ModelResultModel) => {
      if (response.data != null) {
        this.modelResultModel = response;
      }
    });
  }

  formSubmit(f: NgForm) {
    this.addCar(f);
  }

  addCar(form: NgForm) {
    if (form.valid) {
      
      this.carModel.plate = form.value.plate;
      this.carModel.modelId = form.value.modelId;
      this.carModel.yearManufactured = form.value.yearManufactured;
      
      this.carService.add(this.carModel).subscribe(res => {
        if (res != null) {
          this.snackBar.open('Cadastrado com sucesso!', 'close', {duration: 6000})
          this.router.navigate(['/car']);
        }
      });
    }
  }
}
