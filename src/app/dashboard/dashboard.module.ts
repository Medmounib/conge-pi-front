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
import { EspaceCategorieListComponent } from './espace-categorie-list/espace-categorie-list.component';
import { EspaceCategorieAddComponent } from './espace-categorie-add/espace-categorie-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ProductListActionsComponent } from './product-list-actions/product-list-actions.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { BlogComponent } from './blog/blog.component';
import { ReclamationComponent } from './reclamation/reclamation.component';


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
    EspaceEditComponent,
    EspaceCategorieListComponent,
    EspaceCategorieAddComponent,
    ProductListComponent,
    ProductListActionsComponent,
    ProductFormComponent,
    BlogComponent,
    ReclamationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  providers: [
    DatePipe
  ]
})
export class DashboardModule { }
