import React from 'react';
import Slider, { Settings } from 'react-slick';

import { ICON_NAME } from './icon.type';
import type { CarouselProps } from '../components/carousel';

export type SliderState = {
  sliderHeaderRef: Slider | undefined;
  sliderBodyRef: Slider | undefined;
  prevWindowSize: number;
  paddingSize: number;
};

export interface SliderComponentProps<H> extends CarouselProps {
  headerItems?: H[];
  headerStyle?: string;
  bodyStyle?: string;
  iconStyle?: string;
  children?: React.ReactNode;
  RenderHeaderItem?: (item: H) => JSX.Element;
  headerIcon?: ICON_NAME | boolean;
  bodyConfig?: Settings;
  headerConfig?: Settings;
}
