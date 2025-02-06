import { getMovieInfo } from '@/utils/movies';
import React from 'react';

interface Props {
    params: Promise<{ id: string }>;
}

const pages = async (props: Props) => {
    const movieId = (await props.params).id;

    const MovieInfo = await getMovieInfo(movieId);

    return (
        <div>
            <div className="rounded-2xl border bg-card relative  overflow-hidden">
                <div className="absolute inset-0">
                    <img className="size-full" src={`https://image.tmdb.org/t/p/w780${MovieInfo?.backdrop_path}`} alt="" />
                </div>

                <div className="size-full grid grid-cols-[3fr_6fr] backdrop-blur-sm gap-10 p-6 bg-black/75 z-10 relative">
                    <img className="rounded-lg border w-full" src={`https://image.tmdb.org/t/p/w780${MovieInfo?.poster_path}`} />

                    <div>
                        <h2 className="text-4xl font-bold">{MovieInfo?.title}</h2>
                        <h4 className="text-xl text-foreground/90 ">{MovieInfo?.tagline}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default pages;
