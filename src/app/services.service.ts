import { Injectable } from '@angular/core';
import { IService } from './services.interface';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  services: Array<IService>; // services array

  constructor() {
    // list of services
    this.services = [
      {
        name: 'Password Reset',
        price: 39.99,
        checked: false,
      },
      {
        name: 'Spyware Removal',
        price: 99.99,
        checked: false,
      },
      {
        name: 'RAM Upgrade',
        price: 129.99,
        checked: false,
      },
      {
        name: 'Software Installation',
        price: 49.99,
        checked: false,
      },
      {
        name: 'Tune-up',
        price: 89.99,
        checked: false,
      },
      {
        name: 'Keyboard Cleaning',
        price: 45.0,
        checked: false,
      },
      {
        name: 'Disk Clean-up',
        price: 149.99,
        checked: false,
      },
    ];
  }

  // get the list of services
  getServices() {
    return this.services;
  }
}
