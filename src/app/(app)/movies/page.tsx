import MovieCard from '@/components/movie-card';
import PaginationComponent from '@/components/pagination';

import { discoverMovies } from '@/utils/movies';
import React from 'react';

const TOTAL_PAGES = 100;

interface Props {
    searchParams: Promise<{ page: string }>;
}
const page = async ({ searchParams }: Props) => {
    const currentPage = parseInt((await searchParams).page) || 1;
    const movies = await discoverMovies({ page: currentPage });

    return (
        <div>
            <h2 className="text-primary font-semibold text-2xl text-center mb-10 mt-6">Movies</h2>

            <div className="grid grid-cols-2 md:flex flex-wrap gap-4 md:gap-6 items-center justify-evenly md:justify-center ">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} className="w-full h-full" />
                ))}
            </div>

            <div className="mt-14">
                <PaginationComponent path="/movies" current={currentPage} total={TOTAL_PAGES} />
            </div>
        </div>
    );
};

export default page;
