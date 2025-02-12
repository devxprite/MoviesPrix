import RatingCompComponent from '@/components/client/rating';
import MovieCard from '@/components/movie-card';
import SearchBar from '@/components/search-bar';
import TrendingSection from '@/components/trending-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { discoverMovies } from '@/utils/movies';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home',
};

const CategoriesList = [
    {
        title: 'Popular Movies',
        description: 'Discover the latest and most popular movies',
        queryFn: discoverMovies({}),
    },
    {
        title: 'Best by Tom Cruise',
        description: 'Discover the best movies by Tom Cruise',
        queryFn: discoverMovies({ with_people: '500', with_cast: '500' }),
    },
    {
        title: 'Top Action Movies',
        description: 'Experience high-octane thrills and adrenaline-pumping action',
        queryFn: discoverMovies({ with_genres: '28' }),
    },
    {
        title: 'Best by Shah Rukh Khan',
        description: 'Watch the finest movies of Bollywood legend Shah Rukh Khan',
        queryFn: discoverMovies({ with_people: '35742', with_cast: '35742' }),
    },
    {
        title: 'Top Comedy Movies',
        description: 'Enjoy a collection of movies guaranteed to make you laugh',
        queryFn: discoverMovies({ with_genres: '35' }),
    },
    {
        title: 'Best from Bollywood',
        description: 'Watch the most iconic and entertaining Bollywood films',
        queryFn: discoverMovies({ with_original_language: 'hi' }),
    },
    {
        title: 'Best Horror Movies',
        description: 'Dive into terrifying tales that will keep you on the edge of your seat',
        queryFn: discoverMovies({ with_genres: '27' }),
    },
    {
        title: 'Best by Leonardo DiCaprio',
        description: 'Explore top-rated movies starring Leonardo DiCaprio',
        queryFn: discoverMovies({ with_people: '6194', with_cast: '6194', sort_by: 'vote_count.desc' }),
    },
    {
        title: 'Best SCI-FI Movies',
        description: 'Discover futuristic worlds and mind-blowing sci-fi adventures',
        queryFn: discoverMovies({ with_genres: '878', sort_by: 'vote_count.desc' }),
    },
    {
        title: 'Best Crime Movies',
        description: 'Uncover the best crime thrillers packed with suspense and mystery',
        queryFn: discoverMovies({ with_genres: '80' }),
    },
];

export default async function Home() {
    const categoriesWithMovies = await Promise.all(
        CategoriesList.map(async category => {
            const movies = await category.queryFn;
            return { ...category, movies };
        })
    );
    const filteredCategoriesWithMovies = categoriesWithMovies.filter(category => category.movies.length > 0);

    return (
        <div className="grid gap-5 2xl:gap-8 w-full">
            <div className=" md:hidden">
                <SearchBar />
            </div>
            <TrendingSection />
            {filteredCategoriesWithMovies.map(category => (
                <Card key={category.title} className="w-full overflow-hidden">
                    <CardHeader>
                        <CardTitle>{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                        <ScrollArea className="w-full whitespace-nowrap">
                            <div className="flex w-max space-x-4 pb-2">
                                {category.movies?.map(movie => (
                                    <MovieCard key={movie.id} movie={movie} />
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" className="h-2" />
                        </ScrollArea>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
