import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ManufacturerListResult } from '../../../models/result/manufacturer-list-result.model';
import { ManufacturerService } from '../../../service/manufacturer.service';
import { ModelModel } from '../../../models/model.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModelService } from '../../../service/model.service';

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html'
})
export class ModelAddComponent implements OnInit{

  manufacturerListResult: ManufacturerListResult = new ManufacturerListResult();
  modelModel: ModelModel = new ModelModel();

  constructor(    
    private manufacturerService: ManufacturerService,
    private modelService: ModelService,
    private router: Router, 
    private snackBar: MatSnackBar,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getManufacturers();
  }

  formSubmit(f: NgForm) {
    this.addModel(f);
  }

  getManufacturers(){
    this.manufacturerService.get().subscribe((response: ManufacturerListResult) => {
      if (response.data != null) {
        this.manufacturerListResult = response;
      }
    }
  )}

  addModel(form: NgForm) {
    if (form.valid) {
      this.modelModel.name = form.value.name;
      this.modelModel.manufacturerId = form.value.manufacturerId;
      
      this.modelService.add(this.modelModel).subscribe(res => {
        if (res != null) {
          this.snackBar.open('Cadastrado com sucesso!', 'close', {duration: 6000})
          this.router.navigate(['/model']);
        }
      });
    }
  }
}
