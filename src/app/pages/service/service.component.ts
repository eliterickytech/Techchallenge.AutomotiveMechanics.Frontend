import { Component, OnInit } from '@angular/core';
import { ServiceResultModel } from '../../models/result/service-result.mode';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { CarService } from '../../service/car.service';
import { forkJoin, map, mergeMap, of, switchMap } from 'rxjs';
import { CarResultModel, Data } from '../../models/result/car-result.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html'
})
export class ServiceComponent implements OnInit {

  serviceResultModel: ServiceResultModel = new ServiceResultModel();

  constructor(private serviceService: ServiceService, private carService: CarService, private router: Router) { }

  ngOnInit() {
    this.listServices();
  }

  ngOnDestroy() {
  }

  redirectAddService(){
    this.router.navigate(['/service/add']);
  }

  async listServices() {
    const response: ServiceResultModel = await this.serviceService.list().toPromise();
  
    if (response != null) {
      this.serviceResultModel = response;
  
      const carPromises = response.data.map(async item => {
        const car: CarResultModel = await this.getCar(item.carId).toPromise();
        item.carResult = car;
        return item;
      });
  
      const data = await Promise.all(carPromises);
      console.log(data);
    }
  }
  

  getCar(id: number){
    return this.carService.get(id).pipe(
      map((response: CarResultModel) => {
        if (response != null) {
          return response;
        }
        return null; // Add this line to return null if the response is null
      })
    );
  }
}
