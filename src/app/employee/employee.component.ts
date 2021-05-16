import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../model/Employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList:any[]=[]
  constructor(public employeeService:EmployeeService) { }
  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(data=>{
      this.employeeList=data;
    });
  }

}
