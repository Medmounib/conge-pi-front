import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardAppComponent} from "./dashboard-app/dashboard-app.component";
import {ProductDashboardComponent} from "./product-dashboard/product-dashboard.component";

const routes: Routes = [
  {path: '', component: DashboardAppComponent}, // TODO use children here like in front-office-routing.module.ts
  {path: 'product', component: ProductDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
