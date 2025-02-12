'use client';

import MovieCard from '@/components/movie-card';
import { useFavorites } from '@/context/favorites-context';

const FavoriteMovies = () => {
    const { favorites } = useFavorites();

    return (
        <div className="grid grid-cols-2 md:flex flex-wrap gap-4 md:gap-6 items-center justify-evenly md:justify-start ">
            {favorites.map(movie => (
                <MovieCard key={movie.id} movie={movie} className="w-full h-full" />
            ))}

            {favorites.length === 0 && (
                <div className="flex col-span-2 flex-col items-center justify-center w-full h-full gap-4">
                    <h2 className="text-muted-foreground py-10">No favorite movies found</h2>
                </div>
            )}
        </div>
    );
};

export default FavoriteMovies;
