/*
===============================================
; Title:  Bob's Computer Repair Shop
; Author: Mark Watson
; Date: 25 July 2021
; Description: Sign-in service specs.
;==============================================
*/

import { TestBed } from '@angular/core/testing';

import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
