import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from '../Employees/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from '../Employees/employee-details/employee-details.component';
import { EmployeeListComponent } from '../Employees/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from '../Employees/update-employee/update-employee.component';



const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/new', component: CreateEmployeeComponent },
  { path: 'employees/:id', component: EmployeeDetailsComponent },
  { path: 'employees/edit/:id', component: UpdateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }