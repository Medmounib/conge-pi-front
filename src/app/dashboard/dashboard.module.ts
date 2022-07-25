import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardHeaderComponent} from './dashboard-header/dashboard-header.component';
import {DashboardAppComponent} from './dashboard-app/dashboard-app.component';
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ProductListActionsComponent } from './product-list-actions/product-list-actions.component';
import { ProductFormComponent } from './product-form/product-form.component';


// @ts-ignore
@NgModule({
  declarations: [
    DashboardHeaderComponent,
    DashboardAppComponent,
    SidebarComponent,
    ProductListComponent,
    ProductListActionsComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    Ng2SmartTableModule,
  ]
})
export class DashboardModule { }
