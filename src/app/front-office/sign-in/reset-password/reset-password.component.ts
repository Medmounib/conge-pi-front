import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Title} from '@angular/platform-browser';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  password = '';
  url = environment.api;
  isLoading = true;
  isError = false;

  constructor(private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private toaster: ToastrService,
              private title: Title) {
  }

  ngOnInit() {
    this.requestNewPassword();
    this.title.setTitle('HealStack - Reset password');
  }

  requestNewPassword() {
    this.isError = false;
    const id = this.activatedRoute.snapshot.params['id'];
    const code = this.activatedRoute.snapshot.params['code']
    this.http.get(this.url + '/users/reset/' + id + '/' + code).subscribe((response: any) => {
      this.isLoading = false;
      this.password = response.newPassword;
    }, () => {
      this.isError = true;
      this.isLoading = false;
      this.toaster.error('Your reset token is probably expired\ntry sending a reset email again',
        'Error :',
        {
          positionClass: 'toast-bottom-right',
          disableTimeOut: true,
          closeButton: true
        });
    });
  }

}
