import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardAppComponent} from "./dashboard-app/dashboard-app.component";
import {ProductListComponent} from "./product-list/product-list.component";



const routes: Routes = [
  {
    path: '', component: DashboardAppComponent, children: [
      {path: 'product', component: ProductListComponent},
      {path: 'product/edit/:id', component: ProductListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
