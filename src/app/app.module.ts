import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { DashboardRoutingModule } from './dashBoard/dashBoard-routing.module';
import { EmployeesRoutingModule } from './Employees/employees-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,DashboardRoutingModule,EmployeesRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
