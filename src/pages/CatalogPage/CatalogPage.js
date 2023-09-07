import React, { useState, useEffect } from 'react';
import css from './CatalogPage.module.css'
import CatalogCard from '../../components/CatalogCard/CatalogCard';

function CatalogPage() {
    const [adverts, setAdverts] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch('https://6479f683a455e257fa642081.mockapi.io/advert')
            .then((response) => response.json())
            .then((data) => {setAdverts(data);})
            .catch((error) => console.error('Помилка при завантаженні оголошень:', error));
    }, []);

    const addToFavorites = (advertId) => {
        if (!favorites.includes(advertId)) {
            setFavorites([...favorites, advertId]);
        }
    };

    const removeFromFavorites = (advertId) => {
        const updatedFavorites = favorites.filter((id) => id !== advertId);
        setFavorites(updatedFavorites);
    };

    return (
        <>
            <div className={css.catalog_container}>
                {adverts.map((advert) => (
                    <CatalogCard
                        key={advert.id}
                        advert={advert}
                        addToFavorites={addToFavorites}
                        removeFromFavorites={removeFromFavorites}
                        isFavorite={favorites.includes(advert.id)}
                    />
                ))}
            </div>
            <button className={css.load_more}>Load more</button>
        </>
    );
}

export default CatalogPage;
