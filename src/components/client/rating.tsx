'use client';

import React from 'react';
import StarRatings from 'react-star-ratings';

interface Props {
    rating: number;
    starDimension?: number;
    starSpacing?: number;
}
const RatingCompComponent = (props: Props) => {
    return (
        <div>
            <StarRatings
                name="rating"
                rating={props.rating}
                numberOfStars={10}
                starSpacing={`${props?.starDimension || 1}px`}
                starDimension={`${props?.starDimension || 16}px`}
                starRatedColor="#21daa2"
                starEmptyColor="#5c5c5c"
            />
        </div>
    );
};

export default RatingCompComponent;
