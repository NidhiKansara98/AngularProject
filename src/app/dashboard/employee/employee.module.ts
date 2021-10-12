import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListEmployeeComponent } from './list-employee/list-employee.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    AddEditEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService]
})
export class EmployeeModule { }
