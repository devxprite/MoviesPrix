'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface Props {
    children: React.ReactNode[];
}

export default function CarouselComponent({ children }: Props) {
    return (
        <Carousel
            className="w-full  overflow-hidden"
            // plugins={[Autoplay({ delay: 2000 })]}
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>
                {children.map((child, index) => (
                    <CarouselItem key={index} className="">
                        {child}
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
