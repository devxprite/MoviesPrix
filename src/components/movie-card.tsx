import { IMovie } from '@/types/api-response';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

type Props = {
    movie: IMovie;
};

const MovieCard = ({ movie }: Props) => {
    return (
        <Link href={'#'}>
            <div className="rounded-md overflow-hidden border relative h-44 md:h-52 aspect-[2/3] md:aspect-[3/4] shadow-md">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className="absolute inset-0 w-full h-full object-cover "
                />

                <p className="absolute px-1.5 py-0.5 top-1 left-1 bg-card/90 border rounded text-xs flex items-center gap-1 text-primary">
                    <IconStarFilled className="size-3 md:size-3.5" /> <span>{movie.vote_average.toFixed(1)}</span>
                </p>

                <div className=" h-full z-10 relative flex items-end">
                    <div className="p-2 pt-8 bg-gradient-to-b from-black/0 via-black/90 to-black w-full">
                        <h3 className="text-xs md:text-sm font-semibold text-ellipsis line-clamp-1 overflow-hidden">{movie.title}</h3>
                        <p className="text-[10px] md:text-xs text-muted-foreground">
                            {movie.release_date} | {movie.original_language}{' '}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
