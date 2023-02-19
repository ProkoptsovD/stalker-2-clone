import { Settings } from 'react-slick';

export const settings: Settings = {
  arrows: false,
  autoplay: false,
  slidesToShow: 1,
  dots: true,
  dotsClass: 'dot',
  lazyLoad: 'progressive'
};

export const tabletAndDesktopSettings: Settings = {
  ...settings,
  useTransform: false,
  useCSS: false
};

export const mobileSliderSettings: Settings = {
  ...settings,
  centerPadding: '0px',
  centerMode: false,
  focusOnSelect: false
};
