import React from 'react';
import { RentalCar } from './RentalCar';
import { rentalCarsData } from '../data/rentalCarsData';

const RentalCars = () => {
  return (
    <div className="rental-cars">
      {rentalCarsData.map((car) => (
        <RentalCar key={car.id} car={car} />
      ))}
    </div>
  );
};

export { RentalCars };