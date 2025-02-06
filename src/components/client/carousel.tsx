'use client';

import Slider from 'react-slick';

import React, { useEffect, useLayoutEffect, useState } from 'react';

interface Props {
    children: React.ReactNode[];
}

export default function CarouselComponent({ children }: Props) {
    // const [isMobile, setIsMobile] = useState(true);

    // const setDeviceType = () => (window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false));

    // useLayoutEffect(() => {
    //     setIsMobile(window.innerWidth < 900);
    // }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return <Slider {...settings}>{children}</Slider>;

    // return (
    //     <ReactCarousel
    //         autoPlay
    //         infiniteLoop
    //         emulateTouch
    //         autoFocus
    //         useKeyboardArrows
    //         centerMode={!isMobile}
    //         centerSlidePercentage={80}
    //         swipeable
    //         showStatus={false}
    //         showIndicators={false}
    //         showArrows={false}
    //         showThumbs={false}
    //         interval={2000}
    //     >
    //         {children}
    //     </ReactCarousel>
    // );
}
