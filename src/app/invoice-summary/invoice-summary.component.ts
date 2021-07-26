/*
===============================================
; Title:  Bob's Computer Repair Shop
; Author: Mark Watson
; Date: 25 July 2021
; Description: Invoice summary components.
;==============================================
*/

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IService } from '../services.interface';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.css'],
})

export class InvoiceSummaryComponent implements OnInit {
  services: Array<IService>;
  today: Date; // today's date
  parts: number;
  hours: number;
  total: number;
  hourlyRate: number;

  constructor(
    private dialogRef: MatDialogRef<InvoiceSummaryComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    // invoice values
    const { services, today, parts, hours, total, hourlyRate } = data;
    this.services = services;
    this.today = new Date();
    this.parts = parseFloat(parts);
    this.hours = parseFloat(hours);
    this.total = parseFloat(total);
    this.hourlyRate = parseFloat(hourlyRate);
  }

  ngOnInit(): void {
  }
}
