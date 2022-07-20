import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardAppComponent} from "./dashboard-app/dashboard-app.component";
import {EventListComponent} from "./event-list/event-list.component";
import {EventFormComponent} from "./event-form/event-form.component";

const routes: Routes = [
  {
    path: '', component: DashboardAppComponent, children: [
      {path: 'evenements', component: EventListComponent},
      {path: 'evenements/ajouter', component: EventFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
