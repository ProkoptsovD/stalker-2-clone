import React from 'react';
import Slider, { Settings } from 'react-slick';
import classNames from 'classnames';

import styles from './carousel.module.css';

import { defaultConfig } from './config';

function Carousel({ className = '', children, config = {} }: CarouselProps) {
  const settings = { ...defaultConfig, ...config };

  return (
    <article className={classNames(styles.carousel, className)}>
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
