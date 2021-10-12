import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, Employees } from '../employee';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';
import { FolderFormController } from '../employee.form';


@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {
  public employee!: Employee[];
  public employeeFormGroup !: FormGroup;
  issubmitted: boolean = false;
  public show: boolean = false;
  
  // folderlist:Employees[] = [];
  // tpayload!: Employees;
  // folderform!: FolderFormController;


  constructor(private service: EmployeeService,
    private fb: FormBuilder,
    private router: Router, private location: Location,
    private routes: ActivatedRoute) {

      // this.folderform = new FolderFormController(this.fb);
      // this.employeeFormGroup = this.folderform.createFormGroup();

    this.employeeFormGroup = this.fb.group({
      id: [''],
      first_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required]],
    });

    //Match Id with routes
    this.routes.paramMap.subscribe((params: any) => {
      const empId = +params.get('id');
      if (empId) {
        this.getEmpById(empId);
      }
    })
  }

  //Get Employee by Id
  public getEmpById(id: number) {
    this.service.getEmployeeById(id).subscribe((empId: Employee) =>
      this.editEmp(empId), (err: string) => console.log(err));
  }

  //Patch value of employee
  public editEmp(emp: Employee) {
    this.employeeFormGroup.patchValue(emp);
  }

  //Hide or show the Form
  public toggle() {
    this.show = !this.show;
  }

  //Get form controls from the form group
  get employeeFormControl() {
    return this.employeeFormGroup.controls;
  }

  //Display list of employees
  public emplist() {
    this.router.navigateByUrl('emplist');
  }


  //Add and update the employee details
  public onSave() {
    if (this.employeeFormGroup.value != null) {
      this.issubmitted = true;
    }

    if (this.employeeFormGroup.value.id) {
      this.service.updateEmployees(this.employeeFormGroup.value).subscribe((data: Employee) => {
        alert("Employee updated successfully");
        this.onReset();
        this.location.back();
      })
    }
    else {
      this.service.addEmployee(this.employeeFormGroup.value).subscribe((data: Employee) => {
        alert("Employee added successfully");
        this.location.back();
      })
    }
  }

  // addFolder(){
  //   if(this.employeeFormGroup.status == ''){
  //     //this.tpayload = this.folderform.buildSaveData(this.employeeFormGroup);
  //     this.service.addEmployee(this.employeeFormGroup.value).subscribe((data:Employees)=>{
  //       //this.tpayload = this.folderform.buildSaveData(this.employeeFormGroup.value);
  //     })
  //   }
  // // }

  //Reset Form value
  public onReset() {
    this.employeeFormGroup == null;
  }

  //Move to back
  public back() {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
