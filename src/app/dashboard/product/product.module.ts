import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { MatButtonModule } from '@angular/material/button';
import { ListProductComponent } from './list-product/list-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogComponent } from '../employee/mat-dialog/mat-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { ExcelService } from './excel.service';



@NgModule({
  declarations: [
    ProductComponent,
    AddEditProductComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  providers:[ProductService, ExcelService],
  entryComponents:[AddEditProductComponent, MatDialogComponent]
})
export class ProductModule { }
