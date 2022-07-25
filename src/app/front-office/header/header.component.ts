import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/authentication/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLogged = false;
  loggedUserName = ""
  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getConnectedUserSubject().subscribe(user => {
      this.isUserLogged = !!user;
      if (user){
        this.loggedUserName = user.firstName + ' ' + user.lastName
      }
    })
  }

}
