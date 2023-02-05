import { Settings } from 'react-slick';

export const defaultConfig: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dotsClass: 'dot'
} as const;
