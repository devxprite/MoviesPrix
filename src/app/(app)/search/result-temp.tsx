import MovieCard from '@/components/movie-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { getTrendingMovies } from '@/utils/movies';
import Link from 'next/link';

const ResultTemp = async () => {
    const results = await getTrendingMovies();

    return (
        <div className="mt-8">
            <Card className="max-w-screen-md mx-auto">
                <CardHeader>
                    <CardTitle>Search Results</CardTitle>
                    <CardDescription>
                        {results.length} {results.length === 1 ? 'result' : 'results'} found for &quot;{'query'}&quot;
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2 md:grid-cols-2">
                    {results.map(movie => (
                        <Link href={`/movies/${movie.id}`} key={movie.id} className="py-1.5 px-2 rounded-md gap-3 flex hover:bg-muted cursor-pointer group transition-all">
                            <img
                                className="border rounded-md size-10 overflow-hidden"
                                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                            />

                            <div className="flex-1">
                                <h3 className={'line-clamp-1 text-ellipsis'}>{movie.title}</h3>

                                <p className="text-xs text-muted-foreground">
                                    {movie.original_language} -{new Date(movie.release_date).getFullYear()}
                                </p>
                            </div>
                        </Link>
                    ))}

                    {results.length === 0 && (
                        <p className="text-center col-span-2 text-muted-foreground py-10">No results found for &quot;{'query'}&quot;</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default ResultTemp;
