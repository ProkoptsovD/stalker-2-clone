import React from 'react';

import {
  CLIENT_X_UNSENSITIVE_DEFLECTION_VALUE,
  X_MOVEMENT_SPEED_COEFFICIENT,
  buttonContent,
  logoImgAlt,
  ARIA_LABELS,
  bgImgAlt
} from './constants/hero.const';
import { updateCustomCssProperty } from '../../utils/update-custom-css-property';

import logoImg from '../../assets/images/png/s2-logo.png';
import bgImg from '../../assets/images/webp/hero_mobile.webp';
import styles from './hero.module.css';
import HeartbeatButton from '../common/components/heartbeat-button';
import useMediaQuery from '../../hooks/use-media-query';

function Hero() {
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

  return (
    <div className={styles.hero_wrapper} onMouseMove={mouseMoveHandler}>
      <img className={styles.logo} src={logoImg} alt={logoImgAlt} />
      <HeartbeatButton content={buttonContent} className={styles.preoder_btn} />

      {isDesktop ? (
        <>
          <div className={styles.cloud} role="img" aria-label={ARIA_LABELS.BG_IMG.CLOUD} />
          <div className={styles.sun} role="img" aria-label={ARIA_LABELS.BG_IMG.SUN} />
          <div className={styles.hero} role="img" aria-label={ARIA_LABELS.BG_IMG.HERO} />
        </>
      ) : (
        <img src={bgImg} className={styles.mobile_bg_img} alt={bgImgAlt} />
      )}
    </div>
  );
}

export default Hero;
