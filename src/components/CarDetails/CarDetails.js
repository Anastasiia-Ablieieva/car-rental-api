import React, { useState } from 'react';
import css from './CarDetails.module.css';

function CarDetails({ isOpen, onClose, advert }) {

  const { id, year, marke, model, type, img, description,fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage} = advert;

  const modalStyle = isOpen ? { display: 'block' } : { display: 'none' };
  
  const splitAddress = (address) => {
    const parts = address.split(', ');
    return {
        city: parts[1],
        country: parts[2],
    };
  };

  const closeModal = () => {
    onClose();
  };

  return (
    <div className={css.modal}>
      <div className={css.modal_content}>
        <button className={css.close_button} onClick={closeModal}>
          &times;
        </button>
        <div className={css.img_container}>
            <img className={css.img} src={img} alt={`${marke} ${model}`} />
        </div>
        <div className={css.title_container}>
            <div className={css.title_container}>
                <p>{marke}</p>
                <p style={{ color: '#3470FF' }}>{model}</p>
                <p>{year}</p>
            </div>
        </div>
        <div className={css.description_container}>
            <p>{splitAddress(address).city}</p><span className={css.span}>|</span>
            <p>{splitAddress(address).country}</p><span className={css.span}>|</span>
            <p>Id: {id}</p><span className={css.span}>|</span>
            <p>Year: {year}</p><span className={css.span}>|</span>
            <p>Type: {type}</p><span className={css.span}>|</span>
            <p>Fuel Consumption: {fuelConsumption}</p><span className={css.span}>|</span>
            <p>Engine Size: {engineSize}</p><span className={css.span}>|</span>
        </div>
        <p className={css.description_car}>{description}</p>
        <p>Accessories and functionalities:</p>
        <div className={css.accessories}>
          {accessories}
          {functionalities}
        </div>
        <p>Rental Conditions:</p>
        <button className={css.button}>Rental car</button>

      </div>
    </div>
  );
}

export default CarDetails;
