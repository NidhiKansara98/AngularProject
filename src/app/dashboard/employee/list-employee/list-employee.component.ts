import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  public employee!: Employee[];
  @Output() editClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private service: EmployeeService, private router: Router,
    ) {
    this.getEmployees();
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
  public editEmp(id:number){
    //this.editClick.emit(`${id}`);
    this.service.getEmployeeById(id).subscribe((data: Employee) => {      
      alert("Employee has been edited from list");
      this.router.navigate([`../dashboard/Employee/addEdit/${id}`]);
    })  
  }

  //Delete Employee details
  public deleteEmp(id:number){
     this.service.deleteEmployee(id).subscribe((data: number) => {
        alert("Employee deleted successfully");
        this.getEmployees();
      })
  }

}
