import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { EmployeeComponent } from './employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

const routes: Routes = [
  { path: '', 
    component: EmployeeComponent,
    children: [
      {
        path:'AddEditEmp',
        component:AddEditEmployeeComponent,
      },
      { path:'addEdit/:id', component: AddEditEmployeeComponent},
      { 
        path:'emplist',
        component:ListEmployeeComponent
      },
      { 
        path:'dashboard',
        component:DashboardComponent
      },
      
    ]
  },
  { path: 'AddEdit', component: AddEditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
