import { IMovieInfo } from '@/types/api-response';
import React from 'react';
import RatingCompComponent from './client/rating';

type Props = {
    info: IMovieInfo;
};

const MovieInfo = ({ info }: Props) => {
    const otherDetails = [
        { label: 'Budget', value: `$${info?.budget}` },
        { label: 'Revenue', value: `$${info?.revenue}` },
        { label: 'Runtime', value: `${info?.runtime} min` },
        { label: 'Release Date', value: `${info?.release_date}` },
        { label: 'Status', value: `${info?.status}` },
        { label: 'Original Language', value: `${info?.original_language}` },
        // { label: 'Original Title', value: `${info?.original_title}` },
        // { label: 'Popularity', value: `${info?.popularity}` },
        { label: 'Vote Count', value: `${info?.vote_count}` },
        { label: 'Vote Average', value: `${info?.vote_average}` },
    ];

    return (
        <div className="rounded-2xl border bg-card relative  overflow-hidden">
            <div className="max-md:hidden absolute inset-0">
                <img className="size-full" src={`https://image.tmdb.org/t/p/w780${info?.backdrop_path}`} alt="" />
            </div>

            <div className="size-full grid md:grid-cols-[3fr_6fr] backdrop-blur-[0px] gap-10 p-6 bg-card/90 z-10 relative">
                <img className=" rounded-lg border w-full h-full" src={`https://image.tmdb.org/t/p/w780${info?.poster_path}`} />

                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-bold">{info?.title}</h2>
                        <h4 className="md:text-lg mt-1 text-foreground/95 ">{info?.tagline}</h4>
                        <RatingCompComponent className="mt-1" rating={info?.vote_average} starDimension={24} />
                    </div>
                    <div>
                        <h4>Genres</h4>
                        <div className="mt-1 flex gap-2 items-center flex-wrap">
                            {info?.genres.map(genre => (
                                <span key={genre.id} className="px-2 py-1 rounded text-xs font-semibold bg-primary">
                                    {genre.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4>Overview</h4>
                        <p className="mt-1 text-sm md:text-base text-foreground/90">{info?.overview}</p>
                    </div>

                    <div className="mt-auto">
                        <h4 className="mb-2">Details</h4>

                        <div className="grid grid-cols-2 gap-4">
                            {otherDetails.map((item, index) => (
                                <div className=" flex flex-col md:flex-row items-center justify-between  rounded-md bg-black/60 p-2">
                                    <h4 className="text-xs md:text-base capitalize">{item.label}</h4>

                                    <p className="text-primary font-semibold">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;
