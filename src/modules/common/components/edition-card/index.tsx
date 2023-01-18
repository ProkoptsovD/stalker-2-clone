import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { Edition } from '../../types/edition.type';
import { pixiApp } from '../../../../lib/pixi-app/pixi-app';
import rippleTextureImage from '../../../../assets/images/png/pattern.png';

import styles from './edition-card.module.css';
import { REVERSE_ANIMATION_SPEED } from '../../constants/edition-card.const';
import BackflipSide from './backflip-side';
import Icon from '../icon';
import { ICON_NAME } from '../../types/icon.type';
import useIsMobileDevice from '../../../../hooks/use-is-mobile-device';

function EditionCard({
  version,
  bgPoster,
  poster,
  cost,
  features,
  featuresAccessLimit
}: EditionCardProps) {
  const articleRef = useRef<HTMLElement | null>(null);
  const separatorRef = useRef<SVGSVGElement | null>(null);
  const isFirstRender = useRef<boolean>(true);

  const isMobileDevice = useIsMobileDevice();
  const { ref, inView } = useInView({
    threshold: 1
  });

  useEffect(() => {
    if (articleRef.current && isFirstRender.current) {
      isFirstRender.current = false;

      const { offsetWidth, offsetHeight } = articleRef.current;

      articleRef.current.style.backgroundImage = `url(${bgPoster})`;
      pixiApp
        .setContainerNode(articleRef.current)
        .setAppSize({ width: offsetWidth, height: offsetHeight })
        .setImageContainTextureEffect(rippleTextureImage)
        .setTargetImageForEffect(poster)
        .setCanvasClassName(styles.canvas)
        .init();
    }
  }, []);

  function playAnimation(mode: 'forward' | 'backward') {
    if (mode === 'forward') {
      pixiApp.demolitionEffect.play();
      separatorRef.current?.classList.add(styles.separator_primary);
    } else {
      pixiApp.demolitionEffect.reverse(REVERSE_ANIMATION_SPEED);
      separatorRef.current?.classList.remove(styles.separator_primary);
    }
  }

  function setArticleRef(node: HTMLElement) {
    articleRef.current = node;
    ref(node);
  }

  function handleSwitchPosterBtnClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const hasClass = event.currentTarget.classList.contains(styles.spin_clockwise);

    if (hasClass) {
      event.currentTarget.classList.remove(styles.spin_clockwise);
      event.currentTarget.classList.add(styles.spin_counterclockwise);
    } else {
      event.currentTarget.classList.remove(styles.spin_counterclockwise);
      event.currentTarget.classList.add(styles.spin_clockwise);
    }
  }

  return (
    <article
      ref={setArticleRef}
      className={styles.card}
      onMouseEnter={playAnimation.bind(pixiApp, 'forward')}
      onMouseLeave={playAnimation.bind(pixiApp, 'backward')}
    >
      <div className={styles.card_content_wrapper}>
        <h4 className={styles.card_title}>{version}</h4>
        <Icon
          name={ICON_NAME.LINE}
          ref={separatorRef}
          className={styles.separator}
          role="separator"
        />
        <BackflipSide items={features} itemsAccessLimit={featuresAccessLimit} />
        <div className={styles.tooltip} />

        {true ? (
          <button
            type="button"
            onClick={handleSwitchPosterBtnClick}
            className={`${styles.rotation_btn} ${styles.spin_on_render}`}
          >
            <Icon name={ICON_NAME.ROTATION} />
          </button>
        ) : null}
      </div>

      <div className={styles.card_footer}>
        <strong className={styles.edition_cost}></strong>
      </div>
    </article>
  );
}

export default EditionCard;

interface EditionCardProps extends Edition {}
