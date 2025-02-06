import RatingCompComponent from '@/components/client/rating';
import MovieCard from '@/components/movie-card';
import TrendingSection from '@/components/trending-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { discoverMovies } from '@/utils/movies';

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
        description: 'Discover the top action movies',
        queryFn: discoverMovies({ with_genres: '28' }),
    },
    // {
    //     title: 'Best by Shah Rukh Khan',
    //     description: 'Discover the best movies by Shah Rukh Khan',
    //     queryFn: discoverMovies({ with_people: '35742', with_cast: '35742' }),
    // },
    // {
    //     title: 'Top Comedy Movies',
    //     description: 'Discover the top comedy movies',
    //     queryFn: discoverMovies({ with_genres: '35' }),
    // },
    // {
    //     title: 'Best from Bollywood',
    //     description: 'Discover the best movies from Bollywood',
    //     queryFn: discoverMovies({ with_original_language: 'hi' }),
    // },
    // {
    //     title: 'Best Horror Movies',
    //     description: 'Discover the best horror movies',
    //     queryFn: discoverMovies({ with_genres: '27' }),
    // },
    // {
    //     title: 'Best by Leonardo DiCaprio',
    //     description: 'Discover the best movies by Leonardo DiCaprio',
    //     queryFn: discoverMovies({ with_people: '6194', with_cast: '6194', sort_by: 'vote_count.desc' }),
    // },
    // {
    //     title: 'Best SCI-FI Movies',
    //     description: 'Discover the best sci-fi movies',
    //     queryFn: discoverMovies({ with_genres: '878', sort_by: 'vote_count.desc' }),
    // },
    // {
    //     title: 'Best Crime Movies',
    //     description: 'Discover the best crime movies',
    //     queryFn: discoverMovies({ with_genres: '80' }),
    // },
];

export default async function Home() {
    const categoriesWithMovies = await Promise.all(
        CategoriesList.map(async category => {
            const movies = await category.queryFn;
            return { ...category, movies };
        })
    );

    console.log(categoriesWithMovies);

    return (
        <div className="grid gap-4 md:gap-8 w-full ">
            <TrendingSection />
            {categoriesWithMovies.map(category => (
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
