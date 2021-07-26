/*
===============================================
; Title:  Bob's Computer Repair Shop
; Author: Mark Watson
; Date: 25 July 2021
; Description: Sign-in components.
;==============================================
*/

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {

  }

  ngOnInit(): void {
    this.signinForm = this.fb.group({ customerUsername: '' });
  }

  // process sign-in
  onSubmit() {
    const formValues = this.signinForm.value;
    const customerUsername = formValues.customerUsername;

    if (this.signinService.validate(customerUsername)) {
      // go to services page if valid
      this.cookieService.set('session_user', customerUsername.toString(), 1);
      this.router.navigate(['/services']);
      window.open('https://watsonm19.github.io/bobs-computer-repair-shop/services', '_self');
    } else {
      // error message if invalid
      this.errorMessage = `The username you entered is invalid, please try again.`;
    }
  }

}
