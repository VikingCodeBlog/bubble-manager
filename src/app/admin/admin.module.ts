import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { CoreModule } from '../core/core.module';
import { ButtonModule } from 'primeng/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { ForgottenPassComponent } from './login/forgotten-pass/forgotten-pass.component';

@NgModule({
  declarations: [
    LoginComponent,
    ListComponent,
    DashboardComponent,
    TopNavbarComponent,
    ForgottenPassComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ButtonModule,
    BadgeModule,
    InputTextModule,
    CoreModule
  ],
})
export class AdminModule {}
