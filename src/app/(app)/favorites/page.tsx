import React from 'react';
import FavoriteMovies from './favorite-movies';

const page = () => {
    return (
        <div className="px-2">
            <h2 className="text-primary font-semibold text-2xl text-center mb-10 mt-6">Favorite Movies</h2>

            <FavoriteMovies />
        </div>
    );
};

export default page;
