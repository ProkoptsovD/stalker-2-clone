import styles from './mobile.module.css';

import heroImgModileSmJpeg from '../../../../assets/images/jpg/hero_sm.jpeg';
import heroImgModileSmWebp from '../../../../assets/images/webp/hero_sm.webp';
import heroImgModileMdWebp from '../../../../assets/images/webp/hero_mobile.webp';
import { bgImgAlt } from '../../constants/hero.const';

function MobileBg() {
  return (
    <picture className={styles.mobile_bg_img}>
      <source srcSet={heroImgModileSmJpeg} type="image/jpeg" media="(max-width: 640px)" />
      <source srcSet={heroImgModileSmWebp} type="image/webp" media="(max-width: 641px)" />
      <source srcSet={heroImgModileMdWebp} type="image/jpeg" media="(min-width: 641px)" />
      <img src={heroImgModileSmJpeg} className={styles.mobile_bg_img} alt={bgImgAlt} />
    </picture>
  );
}

export default MobileBg;
