import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Title} from '@angular/platform-browser';
import {AuthService} from "../../../shared/authentication/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isLoading = false;
  isError = false;
  isError2 = false;
  signInSubscription: Subscription;

  constructor(private authService: AuthService, private title: Title) {
  }


  ngOnInit() {
    this.title.setTitle('HealStack - Sign in');
    this.setupForm();
  }

  setupForm() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.isError = false;
    this.signInSubscription = this.authService.signIn(this.form.value).subscribe((responseData:any) => {
      this.isLoading = false;
      this.authService.createUser(responseData);
      this.authService.redirectToHome();
    }, (error:any) => {
      this.isLoading = false;
      this.isError = true;
      this.isError2 = true;
      this.form.patchValue({password: ''});
    });
  }

  ngOnDestroy(): void {
    if (this.signInSubscription) {
      this.signInSubscription.unsubscribe();
    }
  }
}

