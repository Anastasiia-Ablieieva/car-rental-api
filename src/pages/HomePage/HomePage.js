import React from 'react';
import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

function HomePage() {
    return (
        <div className={css.home_container}>
            <div className={css.home}> 
                <h1 className={css.title}>Welcome to our car rental service!</h1>
                <h2 className={css.text}>Find your perfect car and rent it now!</h2>
                <Link to='/catalog'>
                    <button className={css.button}>
                        Go to Catalog
                    </button>
                </Link>
                <Link to='/favorites'>
                    <button className={css.button}>
                        Favorite Cars
                    </button>
                </Link>
            </div>           
        </div>
    );
}

export default HomePage;