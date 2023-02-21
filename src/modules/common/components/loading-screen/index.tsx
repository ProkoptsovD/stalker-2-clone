import classNames from 'classnames';
import React from 'react';

import { logoAltText } from '../../../header/constants/header.const';

import logoDefaultImg from '../../../../assets/images/png/s2-logo.png';
import styles from './loading-screen.module.css';
import { radioactiveSunImg } from './sun.const';

const LoadingScreen = React.forwardRef<HTMLDivElement, LoadingScreenProps>(
  ({ LogoComponent = DefaultLogo, styling = {}, withAnimation = true, ...restProps }, ref) => {
    return (
      <div ref={ref} className={classNames(styles.backdrop, styling.backdrop)}>
        <LogoComponent
          styling={{
            wrapper1: classNames(styles.wrapper1, styling.wrapper1),
            logoImg: classNames(styles.logo, styling.logoImg),
            image1: classNames(styles.rad_sun, styling.image1)
          }}
          withAnimation={withAnimation}
          {...restProps}
        />
      </div>
    );
  }
);

export default LoadingScreen;

function DefaultLogo({ styling = {}, logoImg = logoDefaultImg, withAnimation }: DefaultLogoProps) {
  return (
    <div className={classNames(styling.wrapper1)}>
      <img
        src={radioactiveSunImg}
        className={classNames({
          [styling.image1 as string]: true,
          [styles.heartbeat]: withAnimation
        })}
        alt={logoAltText}
      />
      <img src={logoImg} className={classNames(styling.logoImg)} alt={logoAltText} />
    </div>
  );
}

export type LoadingScreenProps = {
  styling?: Partial<{
    backdrop: string;
    wrapper1: string;
    logoImg: string;
    image1: string;
  }>;
  logoImg?: string;
  withAnimation?: boolean;
  LogoComponent?: React.FunctionComponent<DefaultLogoProps>;
};

type DefaultLogoProps = Omit<LoadingScreenProps, 'LogoComponent'>;
