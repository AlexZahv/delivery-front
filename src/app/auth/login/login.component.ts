import { Component, OnInit } from '@angular/core';
import {Login} from "../models/login";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  loginModel: Login = new Login();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onClick() {
    console.log(JSON.stringify(this.loginForm.value));
    this.authService.doLogin(this.loginForm.value);
  }

}
