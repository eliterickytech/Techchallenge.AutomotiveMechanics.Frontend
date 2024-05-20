import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CarService } from '../../service/car.service';
import { CarResultModel } from '../../models/result/car-result.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html'
})
export class CarComponent implements OnInit{

  carResultModel: CarResultModel = new CarResultModel();

  constructor(private carService: CarService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.listCars();
  }

  listCars(){
    this.carService.list().subscribe((response: CarResultModel) => {
      if (response.data != null) {
        this.carResultModel = response;
      }
    });
  }  

  redirectAddCar(){
    this.router.navigate(['/car/add']);
  }
}
