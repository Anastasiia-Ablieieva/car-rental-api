import React from 'react';
import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

function HomePage() {
    return (
        <div className={css.home_container}>
            <div className={css.home}> 
                <h1 className={css.title}>Welcome to our car rental service!</h1>
                <h2 className={css.text}>Find your perfect car and rent it now!</h2>
                <Link className={css.button} to='/catalog'>
                    Catalog
                </Link>
                <Link className={css.button} to='/favorites'>
                    Favorite Cars
                </Link>
            </div>           
        </div>
    );
}

export default HomePage;