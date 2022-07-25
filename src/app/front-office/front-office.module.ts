import {NgModule} from '@angular/core';

import {FrontOfficeRoutingModule} from './front-office-routing.module';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {EventCardComponent} from "./event-card/event-card.component";
import {EventListComponent} from "./event-list/event-list.component";
import {BreadCrumbComponent} from "./bread-crumb/bread-crumb.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {EventDetailComponent} from "./event-detail/event-detail.component";
import {EspaceListComponent} from "./espace-list/espace-list.component";
import {SharedModule} from "../shared/shared.module";
import {FrontAppComponent} from './front-app/front-app.component';
import {CommonModule} from "@angular/common";
import {ProductCardComponent} from "./product-card/product-card.component";
import { CalendarComponent } from './calendar/calendar.component';
import {FullCalendarModule} from "@fullcalendar/angular";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    EventCardComponent,
    EventListComponent,
    BreadCrumbComponent,
    ProductListComponent,
    EventDetailComponent,
    EspaceListComponent,
    FrontAppComponent,
    ProductCardComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FrontOfficeRoutingModule,
    FullCalendarModule
  ]
})
export class FrontOfficeModule { }
