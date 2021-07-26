/*
===============================================
; Title:  Bob's Computer Repair Shop
; Author: Mark Watson
; Date: 25 July 2021
; Description: Invoice summary specs.
;==============================================
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSummaryComponent } from './invoice-summary.component';

describe('InvoiceSummaryComponent', () => {
  let component: InvoiceSummaryComponent;
  let fixture: ComponentFixture<InvoiceSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
