import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ModelService } from '../../../app/service/model.service';
import { ModelResultModel } from '../../../app/models/result/model-result.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html'
})
export class ModelComponent implements OnInit{

  modelListResult: ModelResultModel = new ModelResultModel();

  constructor(private modelService: ModelService,    private router: Router, 
    private renderer: Renderer2,
    private snackBar: MatSnackBar) { }
    
  ngOnInit() {
    this.getModels();
  }

  getModels(){
    this.modelService.list().subscribe((response: ModelResultModel) => {
      if (response.data != null) {
        this.modelListResult = response;
      }
    }
  )}  

  redirectAddModel(){
    this.router.navigate(['/model/add']);
  }
}
