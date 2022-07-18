import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardHeaderComponent} from './dashboard-header/dashboard-header.component';
import {DashboardAppComponent} from './dashboard-app/dashboard-app.component';
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    DashboardHeaderComponent,
    DashboardAppComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
