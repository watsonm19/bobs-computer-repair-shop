/*
===============================================
; Title:  Bob's Computer Repair Shop
; Author: Mark Watson
; Date: 25 July 2021
; Description: Base layout components.
;==============================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  shopName = `Bob's Computer Repair Shop`;
  isLoggedIn: boolean;

  constructor(private cookieService: CookieService, private router: Router) {
    if (this.cookieService.get('session_user')) {
      this.isLoggedIn = true;
    }
  }

  ngOnInit(): void {
  }

  signOut() {
    this.cookieService.deleteAll();
    this.isLoggedIn = false;
    this.router.navigate(['sign-in']);
  }
}
