import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import RatingCompComponent from './client/rating';
import ISO6391 from 'iso-639-1';
import { getTrendingMovies } from '@/utils/movies';
import { Button } from './ui/button';
import CarouselComponent from './client/carousel';

const TrendingSection = async () => {
    const movies = await getTrendingMovies();

    return (
        <CarouselComponent>
            {movies.map(movie => (
                <div>
                    {/* for desktop */}
                    <div className="hidden w-full border relative bg-card overflow-hidden h-[26rem] 2xl:h-[29rem] md:grid rounded-2xl grid-cols-[4fr_6fr] 2xl:grid-cols-[3fr_6fr] gap-2 items-center justify-between">
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
                            <p className="text-muted-foreground line-clamp-5 mt-2">{movie.overview}</p>

                            <Button className="w-fit px-10 mt-auto ">Watch Now</Button>
                        </div>

                        <div className="relative h-full ">
                            <img className="w-full h-full " src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} />
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-card to-transparent"></div>
                        </div>
                    </div>

                    {/* for mobile */}
                    <div className="md:hidden h-[30rem] w-full border relative bg-card overflow-hidden rounded-2xl 2 items-center justify-between">
                        <div className="absolute inset-0 ">
                            <img className="w-full h-full " src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} />
                        </div>

                        <div className="flex h-full items-end  z-10 relative">
                            <div className="p-4 pt-12 bg-gradient-to-b from-transparent via-[25%] via-black/75 to-black/90 w-full">
                                <h2 className="font-bold text-2xl">{movie.title}</h2>
                                <p className="md:text-lg font-medium  text-foreground/90">
                                    {movie.release_date} | {ISO6391.getName(movie.original_language)}
                                </p>
                                <p className="flex items-center gap-2">
                                    <RatingCompComponent starDimension={20} rating={movie.vote_average} /> ({movie.vote_average})
                                </p>
                                <p className="text-muted-foreground text-xs line-clamp-4 mt-2">{movie.overview}</p>

                                {/* <Button className="mt-4">
                           <PlayCircleIcon /> Watch Trailer
                       </Button> */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </CarouselComponent>
    );
};

export default TrendingSection;
