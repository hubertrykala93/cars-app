import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: Car | undefined;
  newService = { part: '', cost: 0 };

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id')!;
    this.car = this.carService.getCarById(carId);
  }

  addService(): void {
    if (this.car && this.newService.part && this.newService.cost > 0) {
      this.carService.addServiceToCar(this.car.id, this.newService);
      this.newService = { part: '', cost: 0 };
      this.car = this.carService.getCarById(this.car.id!);  // refresh car details
    }
  }
}
