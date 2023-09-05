import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to our car rental service!</h1>
            <p>Find your perfect car and rent it now.</p>
            <Link to='/catalog'>
                <button>
                    Go to Catalog
                </button>
            </Link>
            <Link to='/favorites'>
                <button>
                    Favorite Cars
                </button>
            </Link>
        </div>
    );
}

export default HomePage;