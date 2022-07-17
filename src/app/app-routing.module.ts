import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'back-office',
    loadChildren: () => import("../app/dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {
    path: '',
    loadChildren: () => import("../app/front-office/front-office.module").then(m => m.FrontOfficeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
