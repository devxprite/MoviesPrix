import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import RatingCompComponent from './client/rating';
import ISO6391 from 'iso-639-1';
import { getTrendingMovies } from '@/utils/movies';
import CarouselComponent from './client/carousel';
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import MovieCard from './movie-card';

const TrendingSection = async () => {
    const movies = await getTrendingMovies();

    return (
        <Card className="w-full overflow-hidden">
            <CardHeader>
                <CardTitle>Trending Movies</CardTitle>
                <CardDescription>Discover the latest and most popular movies</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="w-full whitespace-nowrap">
                    <div className="flex w-max space-x-4 pb-2">
                        {movies.map((movie, index) => (
                            <div
                                key={movie.id}
                                className="rounded-lg text-left relative border overflow-hidden bg-red-500 shadow-md aspect-video w-[calc(100vw-4.75rem)] md:w-[32rem] "
                            >
                                <img
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                                />

                                <div className=" h-full z-10 relative flex items-end">
                                    <div className="p-4 pt-16 bg-gradient-to-b from-black/0 via-black/90 to-black w-full">
                                        <h2 className="text-lg font-semibold">{movie.title}</h2>

                                        <p className="text-sm text-foreground/90 font-semibold">
                                            {movie.release_date} |{ISO6391.getName(movie.original_language)}
                                        </p>
                                        <div className="flex gap-2 items-center">
                                            <RatingCompComponent rating={movie.vote_average} />{' '}
                                            <p className="text-muted-foreground text-sm">({movie.vote_average})</p>{' '}
                                        </div>
                                        <p className="mt-2 text-xs md:text-xs line-clamp-3 text-muted-foreground">{movie.overview}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" className="h-2" />
                </ScrollArea>
            </CardContent>
        </Card>
    );
};

export default TrendingSection;
