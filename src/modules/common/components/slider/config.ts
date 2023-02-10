import { Settings } from 'react-slick';

const sharedConfig: Settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  focusOnSelect: true,
  autoplay: false,
  infinite: false,
  speed: 500,
  arrows: false
} as const;

export const headerSliderConfig: Settings = {
  ...sharedConfig,
  dots: false,
  centerMode: true,
  touchThreshold: 50
} as const;

export const bodySliderConfig: Settings = {
  ...sharedConfig,
  dotsClass: 'dot',
  dots: true,
  touchThreshold: 10
} as const;
