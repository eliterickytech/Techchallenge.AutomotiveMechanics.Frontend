import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../service/car.service';
import { NgForm } from '@angular/forms';
import { CarResultModel } from '../../../models/result/car-result.model';
import { ServiceService } from '../../../service/service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html'
})
export class ServiceAddComponent implements OnInit{

  carResultModel: CarResultModel = new CarResultModel();
  constructor(private carService: CarService, private serviceService: ServiceService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.listCars();
  }

  formSubmit(f: NgForm) {
    this.addService(f);
  }

  addService(form: NgForm) {
    this.serviceService.add(form.value).subscribe(res => {
      if (res != null) {
        this.snackBar.open('Cadastrado com sucesso!', 'close', {duration: 6000})
        this.router.navigate(['/service']);
      }
    });
  }

  listCars(){
    this.carService.list().subscribe((response: CarResultModel) => {
      if (response.data != null) {
        this.carResultModel = response;
      }
    });
  }  
}
