import React, { useState, useEffect } from 'react';
import css from './CatalogPage.module.css'

function CatalogPage() {
    const [adverts, setAdverts] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [visibleAdverts, setVisibleAdverts] = useState([]);
    const itemsPerPage = 8; 
    const [pageNumber, setPageNumber] = useState(1);

    // Завантаження оголошень 
    useEffect(() => {
        fetch('https://6479f683a455e257fa642081.mockapi.io/advert')
            .then((response) => response.json())
            .then((data) => {
                setAdverts(data);
                setVisibleAdverts(data.slice(0, itemsPerPage));
            })
            .catch((error) => console.error('Помилка при завантаженні оголошень:', error));
    }, []);

    // Додавання до списку улюблених
    const addToFavorites = (advertId) => {
        if (!favorites.includes(advertId)) {
            setFavorites([...favorites, advertId]);
        }
    };

    // Видалення зі списку улюблених
    const removeFromFavorites = (advertId) => {
        const updatedFavorites = favorites.filter((id) => id !== advertId);
        setFavorites(updatedFavorites);
    };
    
    // Отримуємо місто/країну
    const splitAddress = (address) => {
        const parts = address.split(', ');
        return {
            city: parts[1], 
            country: parts[2], 
        };
    };

    const loadMore = () => {
        const startIndex = visibleAdverts.length;
        const endIndex = startIndex + itemsPerPage;
        setVisibleAdverts([...visibleAdverts, ...adverts.slice(startIndex, endIndex)]);
    };

    return (
    <div >
        <div className={css.catalog_container}>
            {adverts.map((advert) => (
            <div className={css.catalog_card} key={advert.id}>
                <img className={css.img} src={advert.img} alt={`${advert.marke} ${advert.model}`} />
                <div className={css.price_container}>
                    <div className={css.price_container}>                    
                        <p>{advert.marke} </p> 
                        <p style={{color: '#3470FF'}}>{advert.model} </p>
                        <p>{advert.year} </p>
                    </div>
                    <p>{advert.rentalPrice}</p>
                </div>
                <div className={css.description_container}>
                    {splitAddress(advert.address) && (
                        <>
                            <p>{splitAddress(advert.address).city}</p>
                            <span className={css.span}>|</span>
                            <p>{splitAddress(advert.address).country}</p>
                            <span className={css.span}>|</span>
                        </>
                    )}
                    <p>{advert.type}</p><span className={css.span}>|</span>
                    <p>{advert.rentalCompany}</p><span className={css.span}>|</span>
                    <p>{advert.marke}</p><span className={css.span}>|</span>
                    <p>{advert.id}</p><span className={css.span}>|</span>
                    <p>{advert.accessories[0]}</p>
                </div>
                <button className={css.button}>Learn more</button>
                {favorites.includes(advert.id) ? (
                <button className={css.button_add} onClick={() => removeFromFavorites(advert.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none">
                        <path d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z" fill="#3470FF" stroke="#3470FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                ) : (
                <button className={css.button_add} onClick={() => addToFavorites(advert.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none">
                        <path d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                )}
            </div>))}
        </div>
        {visibleAdverts.length < adverts.length && (
            <button className={css.load_more} onClick={loadMore}>Load more</button>
        )}
    </div>
    );
}

export default CatalogPage;
