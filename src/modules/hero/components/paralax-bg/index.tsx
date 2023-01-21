import { ARIA_LABELS } from '../../constants/hero.const';

import styles from './paralax-bg.module.css';

function ParalaxBg() {
  return (
    <>
      <div className={styles.cloud} role="img" aria-label={ARIA_LABELS.BG_IMG.CLOUD} />
      <div className={styles.sun} role="img" aria-label={ARIA_LABELS.BG_IMG.SUN} />
      <div className={styles.hero} role="img" aria-label={ARIA_LABELS.BG_IMG.HERO} />
    </>
  );
}

export default ParalaxBg;
