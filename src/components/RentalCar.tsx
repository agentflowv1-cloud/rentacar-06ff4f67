import React from 'react';
import { rentalCarType } from '../types/rentalCarType';

interface Props {
  car: rentalCarType;
}

const RentalCar = ({ car }: Props) => {
  return (
    <div className="rental-car">
      <img src={car.image} alt={car.title} />
      <h2>{car.title}</h2>
      <p>{car.description}</p>
      <button>{car.callToAction}</button>
    </div>
  );
};

export { RentalCar };