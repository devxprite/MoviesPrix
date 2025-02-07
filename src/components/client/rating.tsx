'use client';

import React from 'react';
import StarRatings from 'react-star-ratings';

interface Props {
    rating: number;
    starDimension?: number;
    starSpacing?: number;
    className?: string;
}
const RatingCompComponent = (props: Props) => {
    return (
        <div className={props.className}>
            <StarRatings
                name="rating"
                rating={props.rating}
                numberOfStars={10}
                starSpacing={`${props?.starSpacing || 1}px`}
                starDimension={`${props?.starDimension || 16}px`}
                starRatedColor="hsl(var(--primary))"
                starEmptyColor="#5c5c5c"
            />
        </div>
    );
};

export default RatingCompComponent;
