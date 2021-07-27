/*
===============================================
; Title:  Bob's Computer Repair Shop
; Author: Mark Watson
; Date: 25 July 2021
; Description: Services components.
;==============================================
*/

import { Component, OnInit } from '@angular/core';
import { IService } from '../services.interface';
import { ServicesService } from '../services.service';
import { InvoiceSummaryComponent } from '../invoice-summary/invoice-summary.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})

export class ServicesComponent implements OnInit {
  services: Array<IService>; // services
  parts: number; // parts amount
  hours: number; // hours amount
  total: number; // parts & hours amount
  hourlyRate: number; // hourly rate

  // get services
  constructor(
    private servicesService: ServicesService,
    private dialog: MatDialog
  ) {
    this.services = servicesService.getServices();
  }

  // clear checked services
  clearServices(): void {
    this.services.forEach((service: IService) => {
      service.checked = false;
    });
  }

  // clear standard fees
  clearFees(): void {
    this.parts = 0;
    this.hours = 0;
    window.location.reload();
  }

  // calculate total cost of services
  calculateServices(): number {
    let totalOfServices = 0;
    this.services.forEach((service: IService) => {
      if (service.checked) {
        totalOfServices += service.price;
      }
    });
    return totalOfServices;
  }

  // calculate total standard fees
  calculateFees() {
    const { parts, hours } = this;
    let total = 0;

    if (!!hours) {
      total = this.hourlyRate = hours * 50;
    }

    if (!!parts) {
      total = parts + total;
    }

    this.services.forEach((service) => {
      if (service.checked) {
        total = total + service.price;
      }
    });

    if (!!total) {
      this.total = total;
      this.showInvoice();
    }
  }

  ngOnInit(): void {}

  // show invoice modal
  showInvoice() {
    const { services, parts, hours, total, hourlyRate } = this;

    const dialogRef = this.dialog.open(InvoiceSummaryComponent, {
      data: {
        services: services.filter((service) => service.checked),
        parts,
        hours,
        total,
        hourlyRate,
      },
      width: '500px',
      disableClose: true
    });

    // subscribe to dialog state
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.clearFees();
        this.clearServices();
      }
    });
  }
}
