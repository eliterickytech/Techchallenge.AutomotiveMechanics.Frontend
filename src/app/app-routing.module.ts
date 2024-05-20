import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './service/auth-guard.service';

// Home
import { HomePage } from './pages/home/home';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ManufacturerComponent } from './pages/manufacturer/manufacturer.component';
import { ManufacturerAddComponent } from './pages/manufacturer/manufacturer-add/manufacturer-add.component';
import { ModelComponent } from './pages/model/model.component';
import { ModelAddComponent } from './pages/model/model-add/model-add.component';

// Error
import { ErrorPage } from './pages/error/error';
import { CarComponent } from './pages/car/car.component';
import { CarAddComponent } from './pages/car/car-add/car-add.component';
import { ServiceAddComponent } from './pages/service/service-add/service-add.component';
import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomePage, data: { title: 'Home'}} ,
  { path: 'login', component: LoginComponent, data: { title: 'Login'}},  
  { path: 'register', component: RegisterComponent, data: { title: 'Registro'}},
  { path: 'manufacturer', component: ManufacturerComponent, data: { title: 'Fabricante'}},
  { path: 'manufacturer/add', component: ManufacturerAddComponent, data: { title: 'Adicionar novo Fabricante'}},
  { path: 'model', component: ModelComponent, data: { title: 'Modelo'}},
  { path: 'model/add', component: ModelAddComponent, data: { title: 'Adicionar novo Modelo'}},
  { path: 'car', component: CarComponent, data: { title: 'Carro'}},
  { path: 'car/add', component: CarAddComponent, data: { title: 'Adicionar novo carro'}},
  { path: 'service', component: ServiceComponent, data: { title: 'Serviço'}},
  { path: 'service/add', component: ServiceAddComponent, data: { title: 'Adicionar novo serviço'}},
	{ path: '**', component: ErrorPage, data: { title: '404 Error'} }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
