import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  product!:Product[];
  constructor(public dialog:MatDialog,
              private service:ProductService) {
                this.getProductsList();
               }

  ngOnInit(): void {
  }

  public addProduct(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    this.dialog.open(AddEditProductComponent, dialogConfig);
  }

  public getProductsList(){
    return this.service.getProducts().subscribe((data:Product[])=>{
      this.product = data;
    })
  }

  //Get Employee by Id from Rest API
  public editProd(product: Product) {
    this.service.getProductById(product.id).subscribe((data: Product) => {

      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.data = product;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "35%";
      this.dialog.open(AddEditProductComponent, dialogConfig);   
    })
  }

  public deleteProd(id:number){
    this.service.deleteProduct(id).subscribe((data: number)=>{
      alert("Product delete successfully");
    })
  }

}
