import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
  public employee!: Employee[];
  public employeeFormGroup !: FormGroup;
  public searchText: string = '';
  @Output() editClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private service: EmployeeService,
             private router: Router, 
             public dialog: MatDialog,
             public dialogService: DialogService  ) {
  
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
    })
  }


  //Delete Employee details
  public deleteEmp(id: number) {
    debugger
    this.dialogService.openConfirmDialog("Are you sure want to delete this record ?")
    .afterClosed().subscribe(res =>{
      if(res){
        this.service.deleteEmployee(id).subscribe((data:number)=>{
          this.getEmployees();
        })
      }
    });
    // this.service.deleteEmployee(id).subscribe((data: number) => {
    //   alert('Employee deleted successfully');
      
  }



}
