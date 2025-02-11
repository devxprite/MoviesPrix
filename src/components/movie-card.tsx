'use client';

import { useFavorites } from '@/context/favorites-context';
import { cn } from '@/lib/utils';
import { IMovie } from '@/types/api-response';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useLocalStorage } from 'react-use';
import Image from './client/image';

type Props = {
    movie: IMovie;
    className?: string;
};

const MovieCard = ({ movie, className }: Props) => {
    const { isFavorited, toggleFavorite } = useFavorites();

    return (
        <Link href={`/movies/${movie.id}`} className="inline-block whitespace-normal" prefetch={false}>
            <div
                className={cn(
                    'rounded-lg overflow-hidden border relative h-44 md:h-52 2xl:h-56 aspect-[3/4] md:aspect-[3/4] shadow-md hover:border-primary transition-all duration-300 group',
                    className
                )}
            >
                <div className="absolute inset-0 w-full h-full object-cover group-hover:brightness-50 transition-all duration-300">
                    <Image
                        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        placeholderSrc={`https://image.tmdb.org/t/p/w45/${movie.poster_path}`}
                        // placeholderSrc={`https://placehold.co/300x450/020202/a3a3a3?font=raleway&text=${encodeURI(movie.title)}`}
                        // placeholder={<div />}
                        alt={movie.title}
                    />
                </div>

                <p className="absolute px-1.5 py-0.5 top-1 left-1 bg-card/90 border rounded text-xs flex items-center gap-1 text-primary">
                    <IconStarFilled className="size-3 md:size-3.5" /> <span>{movie.vote_average.toFixed(1)}</span>
                </p>

                {/* <div className="absolute top-1.5 right-1.5 text-primary p-1 rounded bg-card/90 ">
                    <Heart
                        onClick={e => {
                            e.stopPropagation();
                            e.preventDefault();
                            toggleFavorite(movie);
                        }}
                        className={cn(' transition-all duration-300 z-30 size-5', isFavorited(movie) && 'fill-primary text-primary')}
                    />
                </div> */}

                <div className=" h-full z-10 relative flex items-end">
                    <div className="p-2 pt-12 bg-gradient-to-b from-black/0 via-black/80 to-black w-full">
                        <h3 className="text-xs md:text-sm font-semibold text-ellipsis line-clamp-1 overflow-hidden group-hover:text-primary transition-all">
                            {movie.title}
                        </h3>
                        <p className="text-[10px] md:text-xs text-foreground/80 h-0 overflow-hidden group-hover:h-[8lh] line-clamp-[8] transition-all">
                            {movie.overview}
                        </p>
                        <p className="text-[10px] md:text-xs text-muted-foreground group-hover:h-0 overflow-hidden transition-all">
                            {movie.release_date} | {movie.original_language}{' '}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
