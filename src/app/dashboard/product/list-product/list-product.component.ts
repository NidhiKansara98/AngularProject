import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { filter } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { ExcelService } from '../excel.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  product!:Product[];
  constructor(public dialog:MatDialog,
              private service:ProductService, public excelService:ExcelService) {
                this.getProductsList();
               }

  ngOnInit(): void {
  }

  //Adding new product in json file
  public addProduct(): void {
    
    let dialogRef = this.dialog.open(AddEditProductComponent);
    
    dialogRef.afterClosed().pipe(
      filter(result => result )
    ).subscribe(prod_name => {
      this.product.push(prod_name);
    })
  }

  //Get all product list from the json file
  public getProductsList(){
    return this.service.getProducts().subscribe((data:Product[])=>{
      this.product = data;
    })
  }

  //Get product by Id from service
  public editProd(product: Product) {
    debugger
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.data = product;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "35%";
      let dialogRef = this.dialog.open(AddEditProductComponent, dialogConfig)
      
      dialogRef.afterClosed().subscribe(result => {
        var check = this.product.findIndex(x => x.id === result.id);
        this.product[check] = result;
      });
  }

  //Delete product from the list
  public deleteProd(id:number){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.service.deleteProduct(id).subscribe((data: number)=>{
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
          this.product.pop();
        })
       
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    
  }

  //Export table data into excel file
  public exportAsExcel():void{
      this.excelService.exportAsExcelFile(this.product, 'Product_data');
  }

  
}
