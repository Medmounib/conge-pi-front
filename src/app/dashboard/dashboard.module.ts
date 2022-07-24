import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardHeaderComponent} from './dashboard-header/dashboard-header.component';
import {DashboardAppComponent} from './dashboard-app/dashboard-app.component';
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';


// @ts-ignore
@NgModule({
  declarations: [
    DashboardHeaderComponent,
    DashboardAppComponent,
    SidebarComponent,
    ProductDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
