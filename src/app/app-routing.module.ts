import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './employee/create/create.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [{ path: '', redirectTo: '/employees', pathMatch: 'full'},
{ path: 'employees', component: EmployeeComponent },
{ path: 'create', component: CreateComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
