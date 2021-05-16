import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../model/Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public httpClient:HttpClient) { }
  //Api URLs
  getEmployeeURL:string ='https://learningapp-core-api-entity-azsql.azurewebsites.net/api/employees'
  getEmployee():Observable<any>{
    return this.httpClient.get(this.getEmployeeURL);
  }
  createEmployee(data:any){
    const jsonData=JSON.stringify(data);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8'}) };
    return this.httpClient.post(this.getEmployeeURL,jsonData,httpOptions);
  }
}
