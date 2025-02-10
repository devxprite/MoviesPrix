'use server';

import { searchMovies } from '@/utils/movies';

const searchMovieAction = async (query: string, signal?: AbortSignal) => {
    const res = searchMovies({ query, signal });
    return res;
};

export default searchMovieAction;
