import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventListComponent} from "./event-list/event-list.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {EspaceListComponent} from "./espace-list/espace-list.component";
import {FrontAppComponent} from "./front-app/front-app.component";
import {EventDetailComponent} from "./event-detail/event-detail.component";
import {EspaceDetailComponent} from "./espace-detail/espace-detail.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {LoginComponent} from "./sign-in/login/login.component";
import {RegisterComponent} from "./sign-in/register/register.component";
import {PasswordForgottenComponent} from "./sign-in/password-forgotten/password-forgotten.component";
import {ResetPasswordComponent} from "./sign-in/reset-password/reset-password.component";

const routes: Routes = [
  {
    path: '', component: FrontAppComponent, children: [
      {path: 'evenements', component: EventListComponent},
      {path: 'evenements/show/:id', component: EventDetailComponent},
      {path: 'reservations/calendrier', component: CalendarComponent},
      {path: 'store', component: ProductListComponent},
      {path: 'espaces', component: EspaceListComponent},
      {path: 'espaces/detail/:id', component: EspaceDetailComponent}
    ]
  },
  {
    path: 'auth', component: SignInComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'password-forgotten', component: PasswordForgottenComponent},
      {path: 'reset-password/:id/:code', component: ResetPasswordComponent},
      {path: '**', redirectTo:'login'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule {
}
