/*
===============================================
; Title:  Bob's Computer Repair Shop
; Author: Mark Watson
; Date: 25 July 2021
; Description: App routing module.
;==============================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

// ROUTES
const routes: Routes = [
  { path: '', component: BaseLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'services', component: ServicesComponent, canActivate: [SignInGuard] }
    ]
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
