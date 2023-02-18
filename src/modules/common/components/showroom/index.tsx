import React from 'react';
import SlickSlider from 'react-slick';
import classNames from 'classnames';

import styles from './showroom.module.css';
import mobileStyles from './showroom-mobile.module.css';
import useMediaQuery from '../../../../hooks/use-media-query';

import type { DefaultHeaderProps, ShowroomProps } from '../../types/showroom.type';

import { updateCustomCssProperty } from '../../../../utils/update-custom-css-property';
import { mobileSliderSettings, settings } from './config';
import SliderComponent from '../slider';
import { SliderComponentProps } from '../../types/slider.type';

function Showroom<T>({
  styling,
  headerItems,
  headerInitialSlide,
  children,
  indicatorAccuracyCorrection = 0,
  RenderHeaderItem = DefaultHeader
}: ShowroomProps<T>) {
  const [activeButton, setActiveButton] = React.useState(headerInitialSlide ?? 0);
  const headerRef = React.useRef<HTMLUListElement | null>(null);
  const mainSliderRef = React.useRef<SlickSlider | null>(null);

  const isTabletAndDesktopScreen = useMediaQuery('(min-width: 640px)');

  const activeButtonCssClass = styling?.activeButton ?? styles.active;

  React.useEffect(() => {
    if (!isTabletAndDesktopScreen) return;

    if (headerRef.current && headerItems.length > 0) {
      // here we find width of one element in header in percents
      const singleItemWidth = Math.round(100 / headerItems.length);
      const singleItemHalfWidth = Math.round(singleItemWidth / 2);
      const activeButtonIndex = activeButton + 1;
      const leftPos = `${
        Math.round(singleItemWidth * activeButtonIndex) -
        singleItemHalfWidth -
        indicatorAccuracyCorrection
      }%`;

      /* then update left pos of indicator
       * pointioning at the middle of each card
       * depending on what active button is
       */
      const updateXPosition = updateCustomCssProperty(headerRef.current);
      const updateGradientPosition = updateCustomCssProperty(document.documentElement);

      /* we want update gradient position with delay
       * which equals to transition speed of shifting left pos of indocator
       */
      const transitionSpeedRaw = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--tr-speed-350');
      const transitionSpeed = Number.parseFloat(transitionSpeedRaw);

      updateXPosition('--left', leftPos);

      const timeoutId = setTimeout(() => {
        // update gradient
        updateGradientPosition('--l-bottom-line-middle', leftPos);

        // update slide in main slider
        mainSliderRef.current?.slickGoTo(activeButton);
      }, transitionSpeed);

      return () => clearTimeout(timeoutId);
    }
  }, [activeButton]);

  return (
    <article className={classNames(styles.showroom, styling?.showroom)}>
      {/* header wrapper */}
      <div className={classNames(styles.header_wrapper, styling?.headerWrapper)}>
        <ul
          ref={headerRef}
          className={classNames({
            [styles.header]: true,
            [styles.tablet_and_desktop]: isTabletAndDesktopScreen,
            [styling?.header as string]: styling?.header
          })}
        >
          {headerItems.map((item, index) => (
            <li key={index} className={classNames(styles.list_item, styling?.listItem)}>
              <RenderHeaderItem
                className={classNames({
                  [styling?.headerItem as string]: styling?.headerItem,
                  [activeButtonCssClass]: index === activeButton
                })}
                item={item}
                onClick={setActiveButton.bind(null, index)}
              />
            </li>
          ))}
        </ul>
      </div>
      <br />

      <SlickSlider
        ref={mainSliderRef}
        {...settings}
        beforeChange={(_, next) => setActiveButton(next)}
      >
        <div className={styles.test}>1</div>
        <div className={styles.test}>2</div>
        <div className={styles.test}>3</div>
        {children}
      </SlickSlider>
    </article>
  );
}

export default Showroom;

Showroom.Mobile = function <H>({
  children,
  headerStyle,
  config,
  ...restProps
}: SliderComponentProps<H>) {
  return (
    <SliderComponent
      headerStyle={classNames(headerStyle, mobileStyles.header)}
      bodyConfig={{ ...mobileSliderSettings, ...config }}
      {...restProps}
    >
      {children}
    </SliderComponent>
  );
};

function DefaultHeader<T>({ className, item, onClick }: DefaultHeaderProps<T>) {
  return (
    <button
      type="button"
      onClick={() => onClick && onClick(item)}
      className={classNames(styles.header_item, className)}
    >
      {item as React.ReactNode}
    </button>
  );
}
