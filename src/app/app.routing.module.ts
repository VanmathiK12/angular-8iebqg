import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'Employees',
    loadChildren: () => import('./Employees/employee.module').then(m => m.EmployeesModule)
  },
  {
    path: 'dashBoard',
    loadChildren: () => import('./dashBoard/dashBoard.module').then(m => m.DashboardModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                            
  exports: [RouterModule]
})
export class AppRoutingModule { }