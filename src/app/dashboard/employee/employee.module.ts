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
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { DialogService } from './dialog.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipe/filter.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    EmployeeComponent,
    AddEditEmployeeComponent,
    ListEmployeeComponent,
    SearchPipe,
    MatDialogComponent,
    FilterPipe
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
    NgxPaginationModule, 
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [EmployeeService, DialogService],
  entryComponents: [AddEditEmployeeComponent, MatDialogComponent]
})
export class EmployeeModule { }
