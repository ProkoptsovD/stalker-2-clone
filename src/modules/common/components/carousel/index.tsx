import React from 'react';
import Slider, { Settings } from 'react-slick';

import styles from './carousel.module.css';

const defaultConfig: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dotsClass: 'dot'
};

function Carousel({ className = '', children, config = {} }: CarouselProps) {
  const settings = { ...defaultConfig, ...config };

  return (
    <article className={`${styles.carousel} ${className}`}>
      <Slider {...settings}>{children}</Slider>
    </article>
  );
}

export default Carousel;

export interface CarouselProps {
  className?: string;
  children?: React.ReactNode;
  config?: Settings;
}
