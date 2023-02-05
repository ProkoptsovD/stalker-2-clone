import React from 'react';
import classNames from 'classnames';
import Slider from 'react-slick';

import styles from './slider.module.css';
import Icon from '../icon';

import { bodySliderConfig, headerSliderConfig } from './config';
import { ICON_NAME } from '../../types/icon.type';

import type { SliderComponentProps, SliderState } from '../../types/slider.type';

export class SliderComponent<H, B> extends React.Component<
  SliderComponentProps<H, B>,
  SliderState
> {
  sliderHeader: any;
  sliderBody: any;

  constructor(props: SliderComponentProps<H, B>) {
    super(props);

    this.state = {
      nav1: undefined,
      nav2: undefined
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.sliderHeader,
      nav2: this.sliderBody
    });
  }

  render() {
    const {
      className,
      headerStyle,
      bodyStyle,
      headerItems,
      bodyItems,
      headerIcon = ICON_NAME.CHEVRON_DOWN,
      iconStyle,
      RenderBodyItem,
      RenderHeaderItem
    } = this.props;

    function renderItem(CustomRenderItem?: (item: H | B) => JSX.Element) {
      return function (itemElem: H | B, index: number) {
        const Element = () =>
          CustomRenderItem ? (
            CustomRenderItem(itemElem)
          ) : (
            <p className={classNames('header-element', styles.default_header_item)}>
              {itemElem as React.ReactNode}
            </p>
          );

        return <Element key={index} />;
      };
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
            asNavFor={this.state.nav2}
            ref={(slider) => (this.sliderHeader = slider)}
            {...headerSliderConfig}
          >
            {headerItems?.map(renderItem(RenderHeaderItem))}
          </Slider>
        </div>

        <div className={classNames(styles.slider_element, bodyStyle)}>
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.sliderBody = slider)}
            {...bodySliderConfig}
          >
            {bodyItems?.map(renderItem(RenderBodyItem))}
          </Slider>
        </div>
      </article>
    );
  }
}

export default SliderComponent;
