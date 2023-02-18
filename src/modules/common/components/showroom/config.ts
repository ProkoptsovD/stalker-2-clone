import { Settings } from 'react-slick';

export const settings: Settings = {
  arrows: false,
  autoplay: false,
  dots: true,
  dotsClass: 'dot',
  speed: 100,
  slidesToShow: 1,
  swipeToSlide: true,
  fade: true
};

export const mobileSliderSettings: Settings = {
  ...settings,
  centerPadding: '0px',
  centerMode: false,
  focusOnSelect: false
};
