import { cn } from '@/lib/utils';
import { ICast } from '@/types/api-response';
import React from 'react';

type Props = {
    cast: ICast;
    className?: string;
};

const CastCard = ({ cast, className }: Props) => {
    return (
        <div>
            <div className={cn('rounded-lg overflow-hidden border relative h-40 md:h-52 aspect-[3/4] shadow-md', className)}>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                    alt={cast.name}
                    className="absolute inset-0 w-full h-full object-cover "
                />

                {/* <p className="absolute px-1.5 py-0.5 top-1 left-1 bg-card/90 border rounded text-xs flex items-center gap-1 text-primary">
                    <IconStarFilled className="size-3 md:size-3.5" /> <span>{movie.vote_average.toFixed(1)}</span>
                </p> */}

                <div className=" h-full z-10 relative flex items-end">
                    <div className="p-2 pt-12 bg-gradient-to-b from-black/0 via-black/80 to-black w-full">
                        <h3 className="text-xs md:text-sm font-semibold text-ellipsis line-clamp-1 overflow-hidden">{cast.name}</h3>
                        <p className="text-[10px] md:text-xs text-muted-foreground">{cast.character}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CastCard;
