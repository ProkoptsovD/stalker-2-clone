import React from 'react';
import classNames from 'classnames';
import Slider from 'react-slick';

import styles from './slider.module.css';
import Icon from '../icon';

import { bodySliderConfig, headerSliderConfig } from './config';
import { ICON_NAME } from '../../types/icon.type';

import type { SliderComponentProps, SliderState } from '../../types/slider.type';

export class SliderComponent<H> extends React.Component<SliderComponentProps<H>, SliderState> {
  PADDING_INCREMENT = 3.71287129;
  sliderHeader: any;
  sliderBody: any;
  updateCenterPadding: () => void;

  constructor(props: SliderComponentProps<H>) {
    super(props);

    this.state = {
      sliderHeaderRef: undefined,
      sliderBodyRef: undefined,
      prevWindowSize: window.innerWidth,
      paddingSize: window.innerWidth / this.PADDING_INCREMENT
    };

    this.updateCenterPadding = this.onWindowResize.bind(this);
  }

  componentDidMount(): void {
    this.setState({
      sliderHeaderRef: this.sliderHeader,
      sliderBodyRef: this.sliderBody
    });

    window.addEventListener('resize', this.updateCenterPadding);
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.updateCenterPadding);
  }

  onWindowResize() {
    const screenWidth = window.innerWidth;

    this.setState((prevState) => ({
      ...prevState,
      paddingSize: screenWidth / this.PADDING_INCREMENT
    }));
  }

  render() {
    const {
      className,
      children,
      headerStyle,
      bodyStyle,
      headerItems,
      headerIcon = ICON_NAME.CHEVRON_DOWN,
      iconStyle,
      headerConfig,
      bodyConfig,
      RenderHeaderItem
    } = this.props;

    function renderItem(item: H, index: number) {
      const Component = () =>
        RenderHeaderItem ? (
          RenderHeaderItem(item)
        ) : (
          <p className={classNames('header-element', styles.default_header_item)}>
            {item as React.ReactNode}
          </p>
        );

      return <Component key={index} />;
    }

    return (
      <article className={classNames(className)}>
        <div className={classNames(styles.slider_element, styles.slider_header, headerStyle)}>
          {headerIcon ? (
            <Icon
              name={headerIcon as ICON_NAME}
              className={classNames(styles.header_icon, iconStyle)}
            />
          ) : null}

          <Slider
            asNavFor={this.state.sliderBodyRef}
            ref={(slider) => (this.sliderHeader = slider)}
            {...{
              ...headerSliderConfig,
              centerPadding: `${this.state.paddingSize}px`,
              ...headerConfig
            }}
          >
            {headerItems?.map(renderItem)}
          </Slider>
        </div>

        <div className={classNames(styles.slider_element, bodyStyle)}>
          <Slider
            asNavFor={this.state.sliderHeaderRef}
            ref={(slider) => (this.sliderBody = slider)}
            {...{
              ...bodySliderConfig,
              centerPadding: `${this.state.paddingSize - 45}px`,
              ...bodyConfig
            }}
          >
            {children}
          </Slider>
        </div>
      </article>
    );
  }
}

export default SliderComponent;
