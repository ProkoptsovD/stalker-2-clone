import React from 'react';
import classNames from 'classnames';

import {
  CLIENT_X_UNSENSITIVE_DEFLECTION_VALUE,
  X_MOVEMENT_SPEED_COEFFICIENT,
  buttonContent,
  logoImgAlt,
  addToWishBtnContent,
  footerText,
  heroSectionHeading,
  addToWishlistHref
} from './constants/hero.const';
import { updateCustomCssProperty } from '../../utils/update-custom-css-property';

import styles from './hero.module.css';
import logoImg from '../../assets/images/png/s2-logo.png';

import HeartbeatButton, { HeartbeatButtonProps } from '../common/components/heartbeat-button';
import useMediaQuery from '../../hooks/use-media-query';
import ParalaxBg from './components/paralax-bg';
import MobileBg from './components/mobile-bg';
import Button from '../common/components/button';
import Distributors from '../common/components/distributors';

import { distributorList } from '../common/constants/distributors.const';
import { availableDate, availableText } from '../common/constants/release-date.const';

function Hero({ ButtonComponent = HeartbeatButton }: HeroProps) {
  const prevClientXPos = React.useRef<number>(0);
  const heroWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const sectionRef = React.useRef<HTMLElement | null>(null);

  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isDesktopAndLargeDesktop = useMediaQuery('(min-width: 1024px) and (max-width: 1279px)');

  React.useEffect(() => {
    if (heroWrapperRef.current && sectionRef.current && isDesktopAndLargeDesktop) {
      const { height } = heroWrapperRef.current.getBoundingClientRect();

      sectionRef.current.style.height = `${height}px`;
    }
  }, []);

  React.useEffect(() => {
    function onWindowResize() {
      const { innerWidth } = window;
      const isMobileAndTablet = innerWidth < 1024;
      const isLargeDesktop = innerWidth >= 1315;

      if (sectionRef.current) {
        if (isMobileAndTablet) {
          sectionRef.current.style.height = 'initial';
        } else if (isLargeDesktop) {
          sectionRef.current.style.height = '97vh';
        } else {
          const { height } = heroWrapperRef.current?.getBoundingClientRect() ?? {};

          sectionRef.current.style.height = `${height}px`;
        }
      }
    }

    window.addEventListener('resize', onWindowResize);

    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  function mouseMoveHandler({ clientX }: React.MouseEvent<HTMLDivElement>) {
    if (!isDesktop) return;

    const delta = prevClientXPos.current - clientX;
    const isMatchPrevXPos = Math.abs(delta) < CLIENT_X_UNSENSITIVE_DEFLECTION_VALUE;

    if (isMatchPrevXPos) return;

    prevClientXPos.current = clientX;

    function calculateBgXSlidePosition(coefficient: number): string {
      return `${(clientX / coefficient) * -1}px`;
    }

    updateCustomCssProperty(
      '--cloud-x-slide',
      calculateBgXSlidePosition(X_MOVEMENT_SPEED_COEFFICIENT.CLOUD)
    );
    updateCustomCssProperty(
      '--sun-x-slide',
      calculateBgXSlidePosition(X_MOVEMENT_SPEED_COEFFICIENT.SUN)
    );
    updateCustomCssProperty(
      '--hero-x-slide',
      calculateBgXSlidePosition(X_MOVEMENT_SPEED_COEFFICIENT.HERO)
    );
  }

  function preorderButtonClickHandler() {}

  return (
    <section ref={sectionRef} className={styles.section}>
      <h1 className="hidden">{heroSectionHeading}</h1>
      <div onMouseMove={mouseMoveHandler} className={styles.outer_wrapper}>
        <div ref={heroWrapperRef} className={classNames('container', styles.hero_wrapper)}>
          <div className={styles.content_layout}>
            <img className={styles.logo} src={logoImg} alt={logoImgAlt} />

            <ButtonComponent
              content={buttonContent}
              onClick={preorderButtonClickHandler}
              className={styles.preoder_btn}
              href="#editions"
            />

            <Button
              content={addToWishBtnContent}
              variant="inverse"
              as="a"
              className={styles.add_to_wish}
              href={addToWishlistHref}
              preventDefault={false}
            />

            {isDesktop ? (
              <div className={styles.hero_footer}>
                <p className={styles.text}>{footerText}</p>
                <Distributors items={distributorList} />
              </div>
            ) : null}
          </div>
        </div>

        {isDesktop ? <ParalaxBg /> : null}
      </div>

      {!isDesktop ? <MobileBg /> : null}

      {!isDesktop ? (
        <div className={styles.hero_footer}>
          <div>
            <strong className={classNames('container', styles.available_date)}>
              {availableText} {availableDate}
            </strong>

            <div className={classNames('container', styles.distributors_wrapper)}>
              <p className={styles.text}>{footerText}</p>
              <Distributors items={distributorList} className={classNames(styles.distributors)} />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Hero;

export type HeroProps = {
  ButtonComponent?: React.FunctionComponent<HeartbeatButtonProps>;
};
