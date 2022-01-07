import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeFormController } from '../employee.form';


@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {
  public employee!: Employee[];
  public employeeFormGroup !: FormGroup;
  issubmitted = false;
  public show: boolean = false;
  public clicked!:any;

  tpayload!: Employee;
  employeeform!: EmployeeFormController;
  btnval = 'Add';
  btnValUpdate = 'Update';

  constructor(private service: EmployeeService,
    private fb: FormBuilder,
    private router: Router, private location: Location,
    private routes: ActivatedRoute, public dialog: MatDialog,
    private dialogRef: MatDialogRef<AddEditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.getEmployees();
    this.employeeform = new EmployeeFormController(this.fb);
    this.employeeFormGroup = this.employeeform.createFormGroup();

    this.employeeFormGroup = this.fb.group({
      id: [''],
      first_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    console.log(this.data);
    this.employeeFormGroup.patchValue(this.data);
  }


  //Hide or show the Form
  public toggle() {
    this.show = !this.show;
  }

  //Get form controls from the form group
  get employeeFormControl() {
    return this.employeeFormGroup.controls;
  }


  //Add and update the employees
  public addData(event:any) {
    debugger
    if (this.employeeFormGroup.value != null) {
      this.issubmitted = true;
    }

    if (this.employeeFormGroup.value.id != '' && this.employeeFormGroup.value.id) {
      this.tpayload = this.employeeform.buildSaveData(this.employeeFormGroup);
      this.service.updateEmployees(this.tpayload).subscribe((data: Employee) => {
        alert("Employee updated successfully");
        event.target.disabled = false;
        this.onClose();
        return data;
      })
    }
    else {
      this.tpayload = this.employeeform.buildSaveData(this.employeeFormGroup);
      this.service.addEmployee(this.tpayload).subscribe((data: Employee) => {
        alert("Employee added successfully");
        event.target.disabled = false;
        this.onClose();

      })
    }
  }

  public getEmployees() {
    return this.service.getEmployees().subscribe((data: Employee[]) => {
      this.employee = data;
      // this.employeeList=new MatTableDataSource(data);
      // this.employeeList.sort=this.sort;
      // this.employeeList.paginator = this.paginator;
    })
  }

  //Reset Form value
  public onReset() {
    this.employeeFormGroup == null;
  }

  //Move to back
  public onClose() {
    this.dialog.closeAll();
  }

}
