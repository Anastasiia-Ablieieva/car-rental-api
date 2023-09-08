import React, { useState } from 'react';
import css from './CatalogCard.module.css'; 
import CarDetails from '../CarDetails/CarDetails';

function CatalogCard({ advert, addToFavorites, removeFromFavorites, isFavorite }) {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const { img, marke, model, year, rentalPrice, address, type, rentalCompany, id, accessories } = advert;

    const splitAddress = (address) => {
        const parts = address.split(', ');
        return {
            city: parts[1],
            country: parts[2],
        };
    };
    
    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
    <div className={css.catalog_card}>
        <div className={css.img_container}>
            <img className={css.img} src={img} alt={`${marke} ${model}`} />
        </div>
        <div className={css.title_container}>
            <div className={css.title_container}>
                <p>{marke}</p>
                <p style={{ color: '#3470FF' }}>{model}</p>
                <p>{year}</p>
            </div>
            <p>{rentalPrice}</p>
        </div>
        <div className={css.description_container}>
            <p>{splitAddress(address).city}</p><span className={css.span}>|</span>
            <p>{splitAddress(address).country}</p><span className={css.span}>|</span>
            <p>{type}</p><span className={css.span}>|</span>
            <p>{rentalCompany}</p><span className={css.span}>|</span>
            <p>{marke}</p><span className={css.span}>|</span>
            <p>{id}</p><span className={css.span}>|</span>
            <p>{accessories[0]}</p>
        </div>
        <button className={css.button} onClick={openModal}>Learn more</button>
        <CarDetails isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} advert={advert}/>
        {isFavorite ? (
        <button className={css.button_add} onClick={() => removeFromFavorites(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none">
                <path
                    d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z"
                    fill="#3470FF"
                    stroke="#3470FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
        ) : (
        <button className={css.button_add} onClick={() => addToFavorites(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none">
                <path
                    d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z"
                    stroke="white"
                    strokeOpacity="0.8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
        )}
    </div>
    );
}

export default CatalogCard;