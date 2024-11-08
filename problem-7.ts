class Car {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  };
}

