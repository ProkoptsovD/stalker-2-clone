import Slider from 'react-slick';
import type { CarouselProps } from '../components/carousel';
import { ICON_NAME } from './icon.type';

export type SliderState = {
  nav1: Slider | undefined;
  nav2: Slider | undefined;
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
