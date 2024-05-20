import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ManufacturerService } from '../../service/manufacturer.service';
import { ManufacturerListResult } from '../../models/result/manufacturer-list-result.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html'
})
export class ManufacturerComponent implements OnInit, OnDestroy {
  manufacturerListResult: ManufacturerListResult = new ManufacturerListResult();
  
  constructor(
    private manufacturerService: ManufacturerService,
    private router: Router, 
    private renderer: Renderer2) { 

  }

  ngOnInit() {
    this.getManufacturers();
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'bg-white');
  }

  getManufacturers(){
    this.manufacturerService.get().subscribe((response: ManufacturerListResult) => {
      if (response.data != null) {
        this.manufacturerListResult = response;
      }
    }
  )}

  redirectAddManufacturer(){
    this.router.navigate(['/manufacturer/add']);
  }
}
