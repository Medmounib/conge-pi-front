import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/authentication/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
    const user = this.authService.getConnectedUserSubject().getValue();
    if (user){
      this.authService.redirectToHome();
    }
  }

}
