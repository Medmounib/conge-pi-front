import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardAppComponent} from "./dashboard-app/dashboard-app.component";
import {EventListComponent} from "./event-list/event-list.component";
import {EventFormComponent} from "./event-form/event-form.component";
import { EditEventComponent } from './edit-event/edit-event.component';
import {EspaceListComponent} from "./espace-list/espace-list.component";
import {AddEspaceComponent} from "./add-espace/add-espace.component";
import {EspaceEditComponent} from "./espace-edit/espace-edit.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductFormComponent} from "./product-form/product-form.component";
import {ProductCategoryListComponent} from "./product-category-list/product-category-list.component";


const routes: Routes = [
  {
    path: '', component: DashboardAppComponent, children: [
      {path: 'evenements', component: EventListComponent},
      {path: 'evenements/ajouter', component: EventFormComponent},
      {path: 'evenements/modifier/:id', component: EditEventComponent},
      {path: 'espaces', component: EspaceListComponent},
      {path: 'espaces/add', component: AddEspaceComponent},
      {path: 'espaces/edit/:id', component: EspaceEditComponent},
      {path: 'produit', component: ProductListComponent},
      {path: 'produit/ajouter', component: ProductFormComponent},
      {path: 'produit/modifier/:id', component: ProductFormComponent},
      {path: 'categorie-produit', component: ProductCategoryListComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
