import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h2>Page not found</h2>
            <Link to='/'>
                <button>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;