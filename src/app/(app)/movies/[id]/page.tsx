import CastCard from '@/components/cast-card';
import MovieCard from '@/components/movie-card';
import MovieInfo from '@/components/movie-info';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { getMovieInfo } from '@/utils/movies';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const id = (await params).id;
    const response = await getMovieInfo(id);

    if (!response) return { title: 'Movie not found' };

    return {
        title: response.title,
        description: response.overview,
        openGraph: {
            title: response.title,
            description: response.overview,
            images: [
                {
                    url: `https://image.tmdb.org/t/p/w500/${response.backdrop_path}`,
                    width: 500,
                    height: 750,
                    alt: response.title,
                },
            ],
        },
    };
}

const pages = async (props: Props) => {
    const movieId = (await props.params).id;

    const response = await getMovieInfo(movieId);
    if (!response) return <div>Movie not found</div>;
    const { cast, similarMovies, ...movieInfo } = response;

    return (
        <div className="grid gap-6">
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
