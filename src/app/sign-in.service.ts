/*
===============================================
; Title:  Bob's Computer Repair Shop
; Author: Mark Watson
; Date: 25 July 2021
; Description: Sign-in service file.
;==============================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  customerUsernames: Array<string>; // valid usernames array

  constructor() {
    // registered usernames
    this.customerUsernames = ['guest', 'customer', 'client', 'user', 'shopper', 'patron', 'visitor']
  }

  // validates username
  validate(customerUsername: string) {
    return this.customerUsernames.some(username => username === customerUsername);
  }
}
