import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {
  public baseUrl = "http://localhost:3000/";

  constructor(private http:HttpClient) { }

  //Add new user
  public addEmployee(data:Employee):Observable<Employee>{
    debugger
    return this.http.post<Employee>(`${this.baseUrl}employee`, data);
  }

  //Get All Employee detail
  public getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}employee`);
  }

  //Get Employee detail by id
  public getEmployeeById(id:number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}employee/${id}`);
  }

  //Update the Employee detail
  public updateEmployees(data:Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.baseUrl}employee/${data.id}`,data);
  }

  //Delete the Employee detail
  public deleteEmployee(id:number): Observable<number>{
    return this.http.delete<number>(`${this.baseUrl}employee/${id}`);
  }
}
