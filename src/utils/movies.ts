import tmdbClient from '@/lib/tmdb';
import { IApiResponse, ICast, IMovie, IMovieInfo } from '@/types/api-response';

interface DiscoverMoviesProps {
    page?: number;
    sort_by?: string;
    primary_release_year?: string;
    with_genres?: string;
    with_cast?: string;
    with_people?: string;
    with_original_language?: string;
}

export const discoverMovies = async (props: DiscoverMoviesProps) => {
    try {
        const response = await tmdbClient.get<IApiResponse<IMovie[]>>('/discover/movie', {
            params: {
                page: props.page || 1,
                include_adult: false,
                include_video: false,
                // sort_by: props.sort_by || 'popularity.desc',
                ...(props.sort_by && { sort_by: props.sort_by }),
                ...(props.with_original_language && { with_original_language: props.with_original_language }),
                ...(props.primary_release_year && { primary_release_year: props.primary_release_year }),
                ...(props.with_genres && { with_genres: props.with_genres }),
                ...(props.with_cast && { with_cast: props.with_cast }),
                ...(props.with_people && { with_people: props.with_people }),
            },
        });

        return response.data.results;
    } catch (error) {
        console.log('Error while fetching movies inside Discover Movies:', error);
        return [];
    }
};

export const getTrendingMovies = async () => {
    try {
        const response = await tmdbClient.get<IApiResponse<IMovie[]>>('/trending/movie/week');
        return response.data.results;
    } catch (error) {
        console.log('Error while fetching movies inside Trending Movies:', error);
        return [];
    }
};

// enum MovieType {
//     TV = 'tv',
//     MOVIE = 'movie',
// }

interface SearchMoviesProps {
    query: string;
    page?: number;
    type?: string;
}

export const searchMovies = async ({ query, type = 'movie', page = 1 }: SearchMoviesProps) => {
    try {
        const response = await tmdbClient.get<IApiResponse<IMovie[]>>(`/search/${type}`, {
            params: {
                query,
                include_adult: false,
                include_video: false,
                page: 1,
            },
        });
        return response.data.results;
    } catch (error) {
        console.log('Error while fetching movies inside Search Movies:', error);
        return [];
    }
};

export const getMovieInfo = async (id: string) => {
    try {
        const movieData = await tmdbClient.get<IMovieInfo>(`/movie/${id}`, {
            params: { language: 'en-US' },
        });

        const similarMovies = await tmdbClient.get<IApiResponse<IMovie[]>>(`/movie/${id}/similar`, {
            params: { language: 'en-US' },
        });
        const castData = await tmdbClient.get<{ cast: ICast[] }>(`/movie/${id}/credits?language=en-US`, {
            params: { language: 'en-US' },
        });

        return {
            ...movieData.data,
            cast: castData.data.cast,
            similarMovies: similarMovies.data.results,
        };
    } catch (error) {
        console.log('Error while fetching movie info:', error);
        return null;
    }
};
