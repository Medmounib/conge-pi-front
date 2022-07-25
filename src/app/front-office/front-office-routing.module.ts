import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventListComponent} from "./event-list/event-list.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {EspaceListComponent} from "./espace-list/espace-list.component";
import {FrontAppComponent} from "./front-app/front-app.component";
import {EventDetailComponent} from "./event-detail/event-detail.component";
import {EspaceDetailComponent} from "./espace-detail/espace-detail.component";
import {CalendarComponent} from "./calendar/calendar.component";
import { ArticlesListComponent } from './AppBlog/articles-list/articles-list.component';
import { ArticleContainerComponent } from './AppBlog/article-container/article-container.component';
import { ArticleFormComponent } from './AppBlog/article-form/article-form.component';
import { ArticleDetComponent } from './AppBlog/article-det/article-det.component';
import { MesArticlesComponent } from './AppBlog/mes-articles/mes-articles.component';
import { ArtUpdateComponent } from './AppBlog/art-update/art-update.component';

const routes: Routes = [
  {
    path: '', component: FrontAppComponent, children: [
      {path: 'evenements', component: EventListComponent},
      {path: 'evenements/show/:id', component: EventDetailComponent},
      {path: 'reservations/calendrier', component: CalendarComponent},
      {path: 'store', component: ProductListComponent},
      {path: 'espaces', component: EspaceListComponent},
      {path: 'espaces/detail/:id', component: EspaceDetailComponent},
      {path: 'blog', component: ArticleContainerComponent },
      {path: 'blog/all', component: ArticlesListComponent},
      {path: 'blog/add',component: ArticleFormComponent},
      {path: 'blog/article/:id', component: ArticleDetComponent},
      {path: 'blog/myarticles', component: MesArticlesComponent},
      {path: 'blog/editarticle/:id', component: ArtUpdateComponent}
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule {
}
