'use client';

import { IMovie } from '@/types/api-response';
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

interface FavoritesContextType {
    favorites: IMovie[];
    setFavorites: React.Dispatch<React.SetStateAction<IMovie[]>>;
    isFavorited: (movie: IMovie) => boolean;
    toggleFavorite: (movie: IMovie) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [localStorageFavorites, setLocalStorageFavorites] = useLocalStorage<IMovie[]>('favorites', []);

    const [favorites, setFavorites] = useState<IMovie[]>(() => localStorageFavorites || []);

    useEffect(() => setLocalStorageFavorites(favorites), [favorites]);

    const isFavorited = (movie: IMovie) => favorites.some(fav => fav.id === movie.id);

    const toggleFavorite = (movie: IMovie) => {
        setFavorites(prevFavorites => (isFavorited(movie) ? prevFavorites.filter(fav => fav.id !== movie.id) : [...prevFavorites, movie]));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites, isFavorited, toggleFavorite }}>{children}</FavoritesContext.Provider>
    );
};

// Custom hook
export const useFavorites = (): FavoritesContextType => {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error('useFavorites must be used within a FavoritesProvider');
    return context;
};
