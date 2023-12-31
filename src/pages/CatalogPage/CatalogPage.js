import React, { useState, useEffect } from 'react';
import css from './CatalogPage.module.css'
import CatalogCard from '../../components/CatalogCard/CatalogCard';
import Loader from '../../components/Loader/Loader';

function CatalogPage() {
    const [adverts, setAdverts] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [displayedAdverts, setDisplayedAdverts] = useState(8);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        fetch('https://6479f683a455e257fa642081.mockapi.io/advert')
            .then((response) => response.json())
            .then((data) => {
                setAdverts(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Помилка при завантаженні оголошень:', error);
                setIsLoading(false);
            });
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

    const loadMoreAdverts = () => {
        setDisplayedAdverts(displayedAdverts + 8);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        if (displayedAdverts >= adverts.length) {
            setShowBackToTop(true);
        } else {
            setShowBackToTop(false);
        }
    }, [displayedAdverts, adverts]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className={css.catalog_container}>
                        {adverts.slice(0, displayedAdverts).map((advert) => (
                            <CatalogCard
                                key={advert.id}
                                advert={advert}
                                addToFavorites={addToFavorites}
                                removeFromFavorites={removeFromFavorites}
                                isFavorite={favorites.includes(advert.id)}
                            />
                        ))}
                    </div>
                    {showBackToTop ? (
                        <button className={css.back_to_top} onClick={scrollToTop}>
                            Back to Top
                        </button>
                    ) : (
                        <button className={css.load_more} onClick={loadMoreAdverts}>
                            Load more
                        </button>
                    )}
                </>
            )}
        </>
    );
}

export default CatalogPage;
