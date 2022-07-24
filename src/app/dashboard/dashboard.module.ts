import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardHeaderComponent} from './dashboard-header/dashboard-header.component';
import {DashboardAppComponent} from './dashboard-app/dashboard-app.component';
import {SharedModule} from "../shared/shared.module";
import {CommonModule, DatePipe} from "@angular/common";
import { SidebarComponent } from './sidebar/sidebar.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditEventComponent } from './edit-event/edit-event.component';
import { EspaceListComponent } from './espace-list/espace-list.component';
import { AddEspaceComponent } from './add-espace/add-espace.component';
import { EspaceEditComponent } from './espace-edit/espace-edit.component';


@NgModule({
  declarations: [
    DashboardHeaderComponent,
    DashboardAppComponent,
    SidebarComponent,
    EventListComponent,
    EventFormComponent,
    EditEventComponent,
    EspaceListComponent,
    AddEspaceComponent,
    EspaceEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ]
})
export class DashboardModule { }
