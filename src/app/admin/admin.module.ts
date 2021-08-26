import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

import { ButtonModule } from 'primeng/button';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    LoginComponent,
    ListComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ButtonModule
  ]
})
export class AdminModule { }
