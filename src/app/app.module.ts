import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { CreateComponent } from './employee/create/create.component';

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent, CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, HttpClientModule,ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
