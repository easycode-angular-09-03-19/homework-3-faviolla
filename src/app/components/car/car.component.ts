import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  public carInfo = {
    name: 'Audi',
    mileage: 1000,
    fuelTank: 55,
    fuel: 5,
    characteristics: [
      'Engine: 2 liters',
      'maxSpeed: 200 km/h'
    ]
  }

  constructor() {
    
  }

  public isVisible = true;

  public drive(): void {
    this.carInfo.mileage++;
    this.carInfo.fuel--;
    if (this.carInfo.fuel == 0) {
      this.isVisible = false;
    }
  }
  public refuel(): void {
    this.carInfo.fuel = this.carInfo.fuelTank;
    if (this.carInfo.fuel == this.carInfo.fuelTank) {
      this.isVisible = true;
    }
  }
}
