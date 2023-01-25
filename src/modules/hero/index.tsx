import React from 'react';

import {
  CLIENT_X_UNSENSITIVE_DEFLECTION_VALUE,
  X_MOVEMENT_SPEED_COEFFICIENT,
  buttonContent,
  logoImgAlt,
  addToWishBtnContent,
  footerText,
  heroSectionHeading
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
  const isDesktop = useMediaQuery('(min-width: 1024px)');

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
    <section className={styles.section}>
      <h1 className="hidden">{heroSectionHeading}</h1>
      <div className={styles.outer_wrapper}>
        <div className={`container ${styles.hero_wrapper}`} onMouseMove={mouseMoveHandler}>
          <div className={styles.content_layout}>
            <img className={styles.logo} src={logoImg} alt={logoImgAlt} />

            <ButtonComponent
              content={buttonContent}
              onClick={preorderButtonClickHandler}
              className={styles.preoder_btn}
            />

            <Button
              content={addToWishBtnContent}
              variant="inverse"
              as="a"
              className={styles.add_to_wish}
            />
          </div>
        </div>

        {isDesktop ? <ParalaxBg /> : null}
      </div>
      {!isDesktop ? <MobileBg /> : null}
      <div className={styles.hero_footer}>
        <div>
          <strong className={`container ${styles.available_date}`}>
            {availableText} {availableDate}
          </strong>

          <div className={`container ${styles.distributors_wrapper}`}>
            <p className={styles.text}>{footerText}</p>
            <Distributors items={distributorList} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

export type HeroProps = {
  ButtonComponent?: React.FunctionComponent<HeartbeatButtonProps>;
};
