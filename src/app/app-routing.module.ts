import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventListComponent} from "./event-list/event-list.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {EspaceListComponent} from "./espace-list/espace-list.component";

const routes: Routes = [
  {path: 'evenements', component: EventListComponent},
  {path: 'store', component: ProductListComponent},
  {path: 'espaces', component: EspaceListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
