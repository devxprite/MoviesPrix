import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import RatingCompComponent from './client/rating';
import ISO6391 from 'iso-639-1';
import { getTrendingMovies } from '@/utils/movies';
import CarouselComponent from './client/carousel';
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import MovieCard from './movie-card';
import { Button } from './ui/button';

const TrendingSection = async () => {
    const movies = await getTrendingMovies();
    const movie = movies[10];

    console.log(movie);

    return (
        <div className="w-full border relative bg-card overflow-hidden h-[26rem] rounded-2xl grid md:grid-cols-[4fr_6fr] gap-2 items-center justify-between">
            <div className="flex flex-col gap-2 w-full h-full p-8 z-10 relative">
                <h2 className="font-bold text-4xl">{movie.title}</h2>

                <div className="">
                    <p className="flex items-center gap-2">
                        <RatingCompComponent starDimension={20} rating={movie.vote_average} /> ({movie.vote_average})
                    </p>
                    <p className="md:text-lg font-semibold mt-4 text-foreground/90">
                        {movie.release_date} | {ISO6391.getName(movie.original_language)}
                    </p>
                </div>
                <p className="text-muted-foreground line-clamp-4 mt-2">{movie.overview}</p>

                <Button className="w-fit px-10 mt-auto ">Watch Now</Button>
            </div>

            <div className="relative h-full ">
                <img className="w-full h-full " src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-card to-transparent"></div>
            </div>
        </div>
    );
};

export default TrendingSection;
