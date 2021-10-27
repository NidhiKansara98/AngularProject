import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from './dashboard.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      { 
        path: 'employee', 
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) 
      },
      { 
        path: 'product', 
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule) }
    ]
  },
  { 
    path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
