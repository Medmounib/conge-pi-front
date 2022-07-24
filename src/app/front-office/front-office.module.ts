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
import { ArticlesListComponent } from './AppBlog/articles-list/articles-list.component';
import { FormsModule } from '@angular/forms';
import { ArticleContainerComponent } from './AppBlog/article-container/article-container.component';
import { ArticleFormComponent } from './AppBlog/article-form/article-form.component';
import { ArticleDetComponent } from './AppBlog/article-det/article-det.component';
import { NavComponent } from './AppBlog/nav/nav.component';
import { MesArticlesComponent } from './AppBlog/mes-articles/mes-articles.component';
import { ArtUpdateComponent } from './AppBlog/art-update/art-update.component';


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
    ArticlesListComponent,
    ArticleContainerComponent,
    ArticleFormComponent,
    ArticleDetComponent,
    NavComponent,
    MesArticlesComponent,
    ArtUpdateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FrontOfficeRoutingModule,
    FormsModule
  ]
})
export class FrontOfficeModule { }
