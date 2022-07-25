import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DashboardAppComponent } from "./dashboard-app/dashboard-app.component";
import { ReclamationComponent } from './reclamation/reclamation.component';

const routes: Routes = [
  {
    path: '', component: DashboardAppComponent, children: [
      { path: 'articles', component: BlogComponent},
      { path: 'reclamations', component: ReclamationComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
