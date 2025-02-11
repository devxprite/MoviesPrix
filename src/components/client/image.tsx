'use client';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface Props extends LazyLoadImageProps {}
const Image = (props: Props) => {
    return <LazyLoadImage className="image" src={props.src} {...props} effect={props.effect || 'blur'} />;
};

export default Image;
