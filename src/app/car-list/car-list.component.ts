import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  newCar: Car = {
    id: '',
    make: '',
    model: '',
    year: undefined,
    services: [],
  };
  currentYear: number = new Date().getFullYear();

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  addCar(): void {
    if (this.newCar.make && this.newCar.model && this.newCar.year) {
      this.newCar.id = (Math.random() * 100000).toFixed(0);

      this.carService.addCar(this.newCar);

      this.cars = this.carService.getCars();

      this.newCar = {
        id: '',
        make: '',
        model: '',
        year: this.currentYear,
        services: [],
      };
    } else {
      alert('Please fill in all fields to add a car.');
    }
  }
}
