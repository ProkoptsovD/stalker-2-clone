import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

import { PixiApp } from '../../../../lib/pixi-app/pixi-app';

import Icon from '../icon';
import Button from '../button';
import BackflipSide from './backflip-side';

import useHasTouchScreen from '../../../../hooks/use-has-touch-screen';
import rippleTextureImage from '../../../../assets/images/png/pattern.png';
import styles from './edition-card.module.css';

import type { Edition } from '../../types/edition.type';
import { preorderButton } from '../../../header/constants/header.const';
import { ICON_NAME } from '../../types/icon.type';
import {
  digitalEditionPreorderLinkMap,
  getPreoderLink,
  REVERSE_ANIMATION_SPEED
} from '../../constants/edition-card.const';

function EditionCard({
  version,
  bgPoster,
  poster,
  cost,
  features,
  featuresAccessLimit,
  className,
  backFlipStyles,
  cardFooterStyles,
  withAnimation = true
}: EditionCardProps) {
  const articleRef = useRef<HTMLElement | null>(null);
  const separatorRef = useRef<SVGSVGElement | null>(null);
  const isFirstRender = useRef<boolean>(true);
  const pixiApp = useRef<PixiApp | null>(withAnimation ? new PixiApp() : null);

  const hasTouchScreen = useHasTouchScreen();
  const key = version as keyof typeof digitalEditionPreorderLinkMap;
  const preorderlink = getPreoderLink(digitalEditionPreorderLinkMap[key] ?? 'sdad');

  useEffect(() => {
    if (articleRef.current && isFirstRender.current && withAnimation && pixiApp.current) {
      isFirstRender.current = false;

      const { offsetWidth, offsetHeight } = articleRef.current;

      articleRef.current.style.backgroundImage = `url(${bgPoster})`;
      pixiApp.current
        .setContainerNode(articleRef.current)
        .setAppSize({ width: offsetWidth, height: offsetHeight })
        .setImageContainTextureEffect(rippleTextureImage)
        .setTargetImageForEffect(poster)
        .setCanvasClassName(styles.canvas)
        .init();
    }
  }, []);

  function playAnimation(mode: 'forward' | 'backward') {
    if (!withAnimation) return;

    if (mode === 'forward') {
      pixiApp.current?.demolitionEffect.play();
      separatorRef.current?.classList.add(styles.separator_primary);
    } else {
      pixiApp.current?.demolitionEffect.reverse(REVERSE_ANIMATION_SPEED);
      separatorRef.current?.classList.remove(styles.separator_primary);
    }
  }

  function handleSwitchPosterBtnClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (!withAnimation) return;

    const hasClass = event.currentTarget.classList.contains(styles.spin_clockwise);

    if (hasClass) {
      event.currentTarget.classList.remove(styles.spin_clockwise);
      event.currentTarget.classList.add(styles.spin_counterclockwise);
      playAnimation('backward');
    } else {
      event.currentTarget.classList.remove(styles.spin_counterclockwise);
      event.currentTarget.classList.add(styles.spin_clockwise);
      playAnimation('forward');
    }
  }

  return (
    <article
      ref={articleRef}
      className={classNames(styles.card, className)}
      onMouseEnter={playAnimation.bind(pixiApp, 'forward')}
      onMouseLeave={playAnimation.bind(pixiApp, 'backward')}
    >
      <div
        className={classNames({
          [styles.card_content_wrapper]: true,
          [styles.relative]: hasTouchScreen
        })}
      >
        <h4 className={styles.card_title}>{version}</h4>
        <Icon
          name={ICON_NAME.LINE}
          ref={separatorRef}
          className={styles.separator}
          role="separator"
        />
        <BackflipSide
          items={features}
          itemsAccessLimit={featuresAccessLimit}
          className={backFlipStyles}
        />
      </div>

      <div className={classNames(styles.card_footer, cardFooterStyles)}>
        {hasTouchScreen ? (
          <button
            type="button"
            onClick={handleSwitchPosterBtnClick}
            className={classNames(styles.rotation_btn, styles.spin_on_render)}
          >
            <Icon name={ICON_NAME.ROTATION} />
          </button>
        ) : null}

        <strong className={styles.edition_cost}>
          {cost.currency}&nbsp;{cost.amount.toFixed(2)}
        </strong>

        <Button
          as="a"
          href={preorderlink}
          variant="primary"
          content={preorderButton}
          className={classNames(styles.preorder_btn)}
        />
      </div>
    </article>
  );
}

/*
 * WebGl and Pixi.js is quite heavy
 * so we want to prevent unnecessary rerenders
 */
export default React.memo(EditionCard);

interface EditionCardProps extends Omit<Edition, 'bgPoster' | 'poster'> {
  className?: string;
  backFlipStyles?: string;
  cardFooterStyles?: string;
  withAnimation?: boolean;
  bgPoster: string;
  poster: string;
}
