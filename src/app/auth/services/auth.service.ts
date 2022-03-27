import { Injectable } from '@angular/core';
import {Login} from "../models/login";
import {Router} from "@angular/router";
import {SpinnerService} from "../../shared/services/spinner.service";
import {timeout} from "rxjs";
// import {MatProgressSpinnerModule} from '@angular/material'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private spinnerService: SpinnerService) { }

  doLogin(loginModel: Login): void {
    this.spinnerService.enableSpinner();
    setTimeout(() => {
      this.spinnerService.disableSpinner();
      this.router.navigateByUrl('/main').then(() => {});
    }, 3000);
  }
}
