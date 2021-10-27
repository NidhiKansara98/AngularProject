import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { MatFormFieldModule } from '@angular/material/form-field/';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SearchPipe } from './pipe/search.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { DialogService } from './dialog.service';

@NgModule({
  declarations: [
    EmployeeComponent,
    AddEditEmployeeComponent,
    ListEmployeeComponent,
    SearchPipe,
    MatDialogComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [EmployeeService, DialogService],
  entryComponents: [AddEditEmployeeComponent, MatDialogComponent]
})
export class EmployeeModule { }
