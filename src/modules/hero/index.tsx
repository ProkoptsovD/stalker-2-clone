import HeartbeatButton from '../common/components/heartbeat-button';
import { buttonContent, logoImgAlt } from './constants/hero.const';

import logoImg from '../../assets/images/png/s2-logo.png';
import styles from './hero.module.css';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <img className={styles.hero_img} src={logoImg} alt={logoImgAlt} />
      <HeartbeatButton content={buttonContent} className={styles.preoder_btn} />
    </div>
  );
}

export default Hero;
