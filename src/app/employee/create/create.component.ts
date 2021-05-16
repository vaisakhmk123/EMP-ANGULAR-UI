import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  constructor(public emploeeService:EmployeeService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      Name: ['', Validators.required],
      Address: ['', Validators.required],
      Organisation: ['', Validators.required],
      });
  }

  ngOnInit(): void {
  
  }
  onSubmit(){
    if (this.form.invalid) {
      return;
    }
    const data =this.form.value
    this.emploeeService.createEmployee(data).subscribe(data=>{
      this.form.setValue({Name:'',Address:'',Organisation:''});
    });
  }
}
