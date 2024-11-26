import { Injectable } from '@angular/core';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsKey = 'cars';

  constructor() {}

  getCars(): Car[] {
    const cars = localStorage.getItem(this.carsKey);
    return cars ? JSON.parse(cars) : [];
  }

  saveCars(cars: Car[]): void {
    localStorage.setItem(this.carsKey, JSON.stringify(cars));
  }

  addCar(car: Car): void {
    const cars = this.getCars();
    cars.push(car);
    this.saveCars(cars);
  }

  getCarById(id: string): Car | undefined {
    return this.getCars().find(car => car.id === id);
  }

  addServiceToCar(id: string, service: { part: string, cost: number }): void {
    const cars = this.getCars();
    const car = cars.find(car => car.id === id);
    if (car) {
      car.services.push(service);
      this.saveCars(cars);
    }
  }
}
