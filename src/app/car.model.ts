export interface Service {
    part: string;
    cost: number;
  }
  
  export interface Car {
    id: string;
    make: string;
    model: string;
    year: number;
    services: Service[];
  }
  