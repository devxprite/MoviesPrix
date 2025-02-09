import CastCard from '@/components/cast-card';
import RatingCompComponent from '@/components/client/rating';
import MovieCard from '@/components/movie-card';
import MovieInfo from '@/components/movie-info';
import SearchBar from '@/components/search-bar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { getMovieInfo } from '@/utils/movies';
import React from 'react';

interface Props {
    params: Promise<{ id: string }>;
}

const pages = async (props: Props) => {
    const movieId = (await props.params).id;

    const response = await getMovieInfo(movieId);
    if (!response) {
        return <div>Movie not found</div>;
    }

    console.log(response);
    const { cast, similarMovies, ...movieInfo } = response;

    return (
        <div className="grid gap-6">
            <SearchBar />

            <MovieInfo info={movieInfo} />

            <Card className="w-full overflow-hidden">
                <CardHeader>
                    <CardTitle>Cast</CardTitle>
                    <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, excepturi.</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                    <ScrollArea className="w-full whitespace-nowrap">
                        <div className="flex w-max space-x-4 pb-2">
                            {cast.map(cast => (
                                <CastCard key={cast.id} cast={cast} />
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" className="h-2" />
                    </ScrollArea>
                </CardContent>
            </Card>

            <Card className="w-full overflow-hidden">
                <CardHeader>
                    <CardTitle>Similar Movies</CardTitle>
                    <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, excepturi.</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                    <ScrollArea className="w-full whitespace-nowrap">
                        <div className="flex w-max space-x-4 pb-2">
                            {similarMovies.map(cast => (
                                <MovieCard key={cast.id} movie={cast} />
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" className="h-2" />
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    );
};

export default pages;
