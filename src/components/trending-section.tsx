import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import RatingCompComponent from './client/rating';
import ISO6391 from 'iso-639-1';
import { getTrendingMovies } from '@/utils/movies';

const TrendingSection = async () => {
    const movies = await getTrendingMovies();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Trending Movies</CardTitle>
                <CardDescription>Discover the latest and most popular movies</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-5">
                    {movies.slice(0, 2).map((movie, index) => (
                        <div key={movie.id} className="rounded-lg relative border overflow-hidden bg-red-500 shadow-md aspect-video">
                            <img
                                className="absolute inset-0 w-full h-full object-cover"
                                src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                            />

                            <div className=" h-full z-10 relative flex items-end">
                                <div className="p-4 pt-16 bg-gradient-to-b from-black/0 via-black/90 to-black w-full">
                                    <h2 className="text-xl font-semibold">{movie.title}</h2>

                                    <p className="text-sm text-foreground/90 font-semibold">
                                        {new Date(movie.release_date).getFullYear()} |{ISO6391.getName(movie.original_language)}
                                    </p>
                                    <p className="flex gap-2 items-center">
                                        <RatingCompComponent rating={movie.vote_average} />{' '}
                                        <span className="text-muted-foreground text-sm">({movie.vote_average})</span>{' '}
                                    </p>
                                    <p className="mt-2 text-xs md:text-xs line-clamp-3 text-muted-foreground">{movie.overview}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default TrendingSection;
