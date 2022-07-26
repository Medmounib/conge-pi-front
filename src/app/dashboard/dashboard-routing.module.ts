
import {EventListComponent} from "./event-list/event-list.component";
import {EventFormComponent} from "./event-form/event-form.component";
import {EditEventComponent} from './edit-event/edit-event.component';
import {EspaceListComponent} from "./espace-list/espace-list.component";
import {AddEspaceComponent} from "./add-espace/add-espace.component";
import {EspaceEditComponent} from "./espace-edit/espace-edit.component";
import {EspaceCategorieListComponent} from "./espace-categorie-list/espace-categorie-list.component";
import {EspaceCategorieAddComponent} from "./espace-categorie-add/espace-categorie-add.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductFormComponent} from "./product-form/product-form.component";
import {ProductCategoryListComponent} from "./product-category-list/product-category-list.component";
import { BlogComponent } from './blog/blog.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import {EspaceCategorieEditComponent} from "./espace-categorie-edit/espace-categorie-edit.component";

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {DashboardAppComponent} from "./dashboard-app/dashboard-app.component";
import {ReclamationComponent} from './reclamation/reclamation.component';
import {LoginAdminComponent} from "./login-admin/login-admin.component";

const routes: Routes = [
  {
    path: '', component: DashboardAppComponent, children: [
      {path: 'evenements', component: EventListComponent},
      {path: 'evenements/ajouter', component: EventFormComponent},
      {path: 'evenements/modifier/:id', component: EditEventComponent},
      {path: 'espaces', component: EspaceListComponent},
      {path: 'espaces/add', component: AddEspaceComponent},
      {path: 'espaces/edit/:id', component: EspaceEditComponent},
      {path: 'espaces/categorie', component: EspaceCategorieListComponent},
      {path: 'espaces/categorie/add', component: EspaceCategorieAddComponent},
      {path: 'product', component: ProductListComponent},
      {path: 'product/edit/:id', component: ProductListComponent},
      {path: 'articles', component: BlogComponent},
      {path: 'reclamations', component: ReclamationComponent},
    ],
  },
  {path: 'login', component: LoginAdminComponent}

      {path: 'espaces/categorie/edit/:id', component: EspaceCategorieEditComponent},
      {path: 'produit', component: ProductListComponent},
      {path: 'produit/ajouter', component: ProductFormComponent},
      {path: 'produit/modifier/:id', component: ProductFormComponent},
      {path: 'categorie-produit', component: ProductCategoryListComponent},
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
