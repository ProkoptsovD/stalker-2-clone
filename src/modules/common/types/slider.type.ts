import Slider from 'react-slick';

import { ICON_NAME } from './icon.type';
import type { CarouselProps } from '../components/carousel';

export type SliderState = {
  sliderHeaderRef: Slider | undefined;
  sliderBodyRef: Slider | undefined;
  prevWindowSize: number;
  paddingSize: number;
};

export interface SliderComponentProps<H, B> extends CarouselProps {
  headerItems?: H[];
  bodyItems?: B[];
  headerStyle?: string;
  bodyStyle?: string;
  iconStyle?: string;
  RenderHeaderItem?: (item: H | B) => JSX.Element;
  RenderBodyItem?: (item: H | B) => JSX.Element;
  headerIcon?: ICON_NAME | boolean;
}
