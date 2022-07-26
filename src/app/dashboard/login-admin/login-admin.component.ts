import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  form: FormGroup;
  url = environment.api;

    constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
   this.setupForm();
  }

  setupForm() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit():void {
    this.http.post(this.url+'/admin/login',this.form.value).subscribe((res:any) => {
      localStorage.setItem('adminData',JSON.stringify(res.admin));
      this.router.navigate(['/back-office']).then();
    })
  }

}
