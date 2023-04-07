import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { DashBoardHomeComponent } from '../dashBoard/dash-board-home/dash-board-home.component';
// import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
// import { SuperDuperComponent } from './super-duper/super-duper.component';


const routes: Routes = [
  {
    path: '',
    component: DashBoardHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }