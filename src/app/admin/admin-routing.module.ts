import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ForgottenPassComponent } from './login/forgotten-pass/forgotten-pass.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "forgotten-pass", component: ForgottenPassComponent },
  { path: "list", component: ListComponent },
  { path: "dashboard", component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
