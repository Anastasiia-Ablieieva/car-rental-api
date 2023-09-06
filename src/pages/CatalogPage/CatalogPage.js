import React, { useState, useEffect } from 'react';
import css from './CatalogPage.module.css'

function CatalogPage() {
    const [adverts, setAdverts] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [visibleAdverts, setVisibleAdverts] = useState([]);
    const itemsPerPage = 8; 

    // Завантаження оголошень 
    useEffect(() => {
        fetch('https://6479f683a455e257fa642081.mockapi.io/advert')
            .then((response) => response.json())
            .then((data) => setAdverts(data))
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
        setVisibleAdverts(adverts.slice(startIndex, endIndex));
    };

    return (
    <div className={css.catalog_container}>
        <div>
            {adverts.map((advert) => (
            <div className={css.catalog_card} key={advert.id}>
                <img src={advert.img} alt={`${advert.marke} ${advert.model}`} />
                <h3>{advert.marke} </h3> 
                <h3>{advert.model} </h3>
                <h3>{advert.year} </h3>
                <p>{advert.rentalPrice} <span className={css.span}>|</span> </p>
                <div>
                    {splitAddress(advert.address) && (
                        <>
                            <p>{splitAddress(advert.address).city} <span className={css.span}>|</span> </p>
                            <p>{splitAddress(advert.address).country} <span className={css.span}>|</span> </p>
                        </>
                    )}
                </div>
                <p>{advert.type} <span className={css.span}>|</span> </p>
                <p>{advert.marke} <span className={css.span}>|</span> </p>
                <p>{advert.id} <span className={css.span}>|</span> </p>

                {favorites.includes(advert.id) ? (
                <button onClick={() => removeFromFavorites(advert.id)}>
                    Видалити з улюблених
                </button>
                ) : (
                <button onClick={() => addToFavorites(advert.id)}>
                    Додати до улюблених
                </button>
                )}
                <button>Learn more</button>
            </div>))}
        </div>
        {visibleAdverts.length < adverts.length && (
            <button onClick={loadMore}>Load more</button>
        )}
    </div>
    );
}

export default CatalogPage;
