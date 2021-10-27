import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../product';
import { ProductFormController } from '../product.form';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  public product!: Product[];
  public productFormGroup !: FormGroup;
   public isSubmitted = false;
  public show: boolean = false;

  tpayload!: Product;
  productForm!: ProductFormController;

  constructor(public dialog: MatDialog,
    public prod_service: ProductService,
    private dialogRef: MatDialogRef<AddEditProductComponent>,
    private fb:FormBuilder, public service:ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.productForm = new ProductFormController(this.fb);
    this.productFormGroup = this.productForm.createFormGroup();
  }

  ngOnInit(): void {
    console.log(this.data);
    this.productFormGroup.patchValue(this.data);
  }

  public addEditProduct() {
    if (this.productFormGroup.value != null) {
      this.isSubmitted = true;
    }

    if (this.productFormGroup.value.id != '' && this.productFormGroup.value.id) {
      this.tpayload = this.productForm.buildSaveProduct(this.productFormGroup);
      this.prod_service.updateProduct(this.tpayload).subscribe((data: Product) => {
        alert("Product update successfully");
        this.onClose();     
      })
    }else{
      this.tpayload = this.productForm.buildSaveProduct(this.productFormGroup);
      this.prod_service.addProduct(this.tpayload).subscribe((data: Product) => {
        alert("Product added successfully");
        this.onClose();     
      })
    }
  }

  get productFormControl(){
    return this.productFormGroup.controls;
  }


  public onClose() {
    this.dialog.closeAll();
  }
}
