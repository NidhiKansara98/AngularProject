import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddEditEmployeeComponent } from '../add-edit-employee/add-edit-employee.component';
import { DialogService } from '../dialog.service';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  public employee: Employee[] = [];
  public employeeFormGroup !: FormGroup;
  public searchText: string = '';
  employeeList!: MatTableDataSource<any>;
  displayedColumns:string[] = ['id','first_name','last_name','email'];
  p!:number;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(private service: EmployeeService,
             private router: Router, 
             public dialog: MatDialog,
             public dialogService: DialogService  ) {
              debugger
      this.getEmployees();

    }

  public addEmp(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    this.dialog.open(AddEditEmployeeComponent, dialogConfig);
    
  }

  ngOnInit(): void {
  }

  //Get All Employee detail
  public getEmployees() {
    return this.service.getEmployees().subscribe((data: Employee[]) => {
      this.employee = data;
      // this.employeeList=new MatTableDataSource(data);
      // this.employeeList.sort=this.sort;
      // this.employeeList.paginator = this.paginator;
    })
  }


  //Get Employee by Id from Rest API
  public editEmp(emp: Employee) {
    this.service.getEmployeeById(emp.id).subscribe((data: Employee) => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.data = emp;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "35%";
      this.dialog.open(AddEditEmployeeComponent, dialogConfig);   
      this.getEmployees();
    })
  }


  //Delete Employee details
  public deleteEmp(id: number) {
    this.dialogService.openConfirmDialog("Are you sure want to delete this record ?")
    .afterClosed().subscribe(res =>{
      if(res){
        this.service.deleteEmployee(id).subscribe((data:number)=>{
          this.getEmployees();
        })
      }
    });   
  }
}
