import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Title} from '@angular/platform-browser';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-password-forgotten',
  templateUrl: './password-forgotten.component.html',
  styleUrls: ['./password-forgotten.component.css']
})
export class PasswordForgottenComponent implements OnInit {
  form: FormGroup;
  url = environment.api;
  isLoading = false;

  constructor(private http: HttpClient, private toaster: ToastrService, private title: Title) {
  }

  ngOnInit() {
    this.setupForm();
    this.title.setTitle('HealStack - Password forgotten');
  }

  setupForm() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    this.sendRequest();
  }

  sendRequest() {
    const toasterParams = {
      positionClass: 'toast-bottom-right',
      disableTimeOut: true,
      closeButton: true
    };
    this.isLoading = true;
    this.http.post(this.url + '/users/password-forgotten', {email: this.form.value.email}).subscribe(() => {
      this.isLoading = false;
      this.toaster.success('Check your email for the reset link\nyou may also find it in the spam folder',
        'Reset email sent',
        toasterParams);
    }, () => {
      this.isLoading = false;
      this.toaster.error('Check your information or try again later', 'Error :', toasterParams);
    });
  }
}
