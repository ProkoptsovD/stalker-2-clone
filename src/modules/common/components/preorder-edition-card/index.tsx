import React from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

import Button from '../button';
import Icon from '../icon';
import BackflipSide from '../edition-card/backflip-side';
import Distributors from '../distributors';
import Modal, { ModalTransitionConfg } from '../modal';

import type { Edition } from '../../types/edition.type';
import { ICON_NAME } from '../../types/icon.type';
import { distributorList } from '../../constants/distributors.const';
import { preorderButton } from '../../../header/constants/header.const';
import { modalAnimationConfig } from './modal-animation.config';
import {
  links,
  preorderBtnText,
  retailersBtnText,
  whatsInsideBtnText
} from '../../constants/preorder-edition-card.const';

import useMediaQuery from '../../../../hooks/use-media-query';
import zoomIcon from '../../../../assets/icons/zoom.svg';
import styles from './preorder-edition-card.module.css';

function PreorderEditionCard({
  bgPoster,
  cost,
  features,
  featuresAccessLimit,
  poster,
  version,
  details,
  className,
  variant,
  prependEditionNameTo,
  packContent,
  modalAnimationConfg
}: PreorderEditionCardProps) {
  const [isModalOpened, setIsModalOpened] = React.useState<boolean>(false);
  const featuresRef = useInView({ threshold: 0.3 });
  const descriptionRef = useInView({ threshold: 0.1 });

  const isMobileScreen = useMediaQuery('(max-width: 639px)');
  const isSmallTablet = useMediaQuery('(min-width: 640px)');
  const isSmallTabletScreenOnly = useMediaQuery('(min-width: 640px) and (max-width: 767px)');
  const isTabletScreen = useMediaQuery('(min-width: 768px)');
  const isLaptopScreen = useMediaQuery('(min-width: 1024px)');
  const isXLDesktopScreen = useMediaQuery('(min-width: 1280px)');

  const [firstEditionNamePart, secondEditionNamePart] = version.split(' ');
  const physicalEditionVariantTitle = `${firstEditionNamePart} physical ${secondEditionNamePart}`;
  const prependEdition = prependEditionNameTo && {
    edition: firstEditionNamePart + ' +',
    children: prependEditionNameTo
  };

  return variant === 'digital' ? (
    // ========= digital variant ===============//
    <article data-variant="digital" className={classNames(styles.card, className)}>
      <div
        className={classNames({
          [styles.posters_wrapper]: true,
          [styles.flex_row]: isTabletScreen,
          [styles.gap1]: isTabletScreen
        })}
        role="img"
      >
        {isMobileScreen ? (
          <img src={bgPoster} className={classNames(styles.bg)} alt={version} />
        ) : null}
        <img
          src={poster}
          className={classNames({
            [styles.poster]: true,
            [styles.static]: !isMobileScreen
          })}
          alt={version}
        />

        {isTabletScreen ? (
          <div
            ref={featuresRef.ref}
            className={classNames({
              [styles.slide]: true,
              [styles.right]: true,
              [styles.to_center]: featuresRef.inView
            })}
          >
            <BackflipSide
              items={features}
              itemsAccessLimit={featuresAccessLimit}
              className={classNames({ [styles.features]: true })}
              containerStyles={classNames({
                [styles.with_bg]: isTabletScreen,
                [styles.features_container]: isTabletScreen
              })}
            />
          </div>
        ) : null}
      </div>

      <div
        ref={descriptionRef.ref}
        className={classNames({
          container: true,
          [styles.container]: true,
          [styles.slide]: isTabletScreen,
          [styles.left]: isTabletScreen,
          [styles.to_center]: descriptionRef.inView && isTabletScreen
        })}
      >
        <div className={classNames(styles.price_wrapper)}>
          <p className={classNames(styles.price)}>
            {cost.currency}&nbsp;{cost.amount}
            <span className={classNames(styles.append_zero)}>.00</span>
          </p>

          <Button
            variant="primary"
            as="a"
            href="asas"
            content={preorderBtnText}
            iconName={ICON_NAME.CREDIT_CARD}
            className={classNames(styles.preorder_btn)}
          />
        </div>

        {isMobileScreen ? (
          <div className={classNames(styles.card_text_content)}>
            <h2 className={classNames(styles.card_title)}>{version}</h2>

            <Icon name={ICON_NAME.LINE} className={styles.separator} role="separator" />

            <div
              ref={featuresRef.ref}
              className={classNames({
                [styles.slide]: true,
                [styles.right]: true,
                [styles.to_center]: featuresRef.inView,
                [styles.delay]: featuresRef.inView
              })}
            >
              <BackflipSide
                items={features}
                itemsAccessLimit={featuresAccessLimit}
                className={classNames(styles.features)}
              />
            </div>
          </div>
        ) : null}

        {isSmallTabletScreenOnly ? (
          <div
            ref={featuresRef.ref}
            className={classNames({
              [styles.slide]: true,
              [styles.right]: true,
              [styles.to_center]: featuresRef.inView,
              [styles.delay]: featuresRef.inView && isMobileScreen
            })}
          >
            <BackflipSide
              items={features}
              itemsAccessLimit={featuresAccessLimit}
              className={classNames(styles.features)}
              containerStyles={classNames(
                styles.with_bg,
                styles.features_container,
                styles.features_small
              )}
            />
          </div>
        ) : null}

        {details ? (
          <div
            ref={descriptionRef.ref}
            className={classNames({
              [styles.description_wrapper]: true,
              [styles.slide]: isSmallTabletScreenOnly || isMobileScreen,
              [styles.left]: isSmallTabletScreenOnly || isMobileScreen,
              [styles.to_center]:
                descriptionRef.inView && (isSmallTabletScreenOnly || isMobileScreen),
              [styles.delay]: descriptionRef.inView && isMobileScreen
            })}
          >
            {isTabletScreen ? (
              <div role="separator" className={classNames(styles.divider_line)} />
            ) : null}

            <h3 className={classNames(styles.description_title)}>{details.title}</h3>

            {details.description.map((paragraph, index) => (
              <p key={index} className={classNames(styles.paragraph)}>
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}

        <Distributors items={distributorList} className={classNames(styles.distributors)} />
      </div>

      {isMobileScreen || isSmallTabletScreenOnly ? (
        <div className={classNames('container', styles.distributors_container)}>
          <div className={classNames(styles.price_wrapper)}>
            <p className={classNames(styles.price)}>
              {cost.currency}&nbsp;{cost.amount}
              <span className={classNames(styles.append_zero)}>.00</span>
            </p>

            <Button
              variant="primary"
              as="a"
              href="asas"
              content={preorderBtnText}
              iconName={ICON_NAME.CREDIT_CARD}
              className={classNames(styles.preorder_btn)}
            />
          </div>
        </div>
      ) : null}
    </article>
  ) : (
    // ========= physical variant ===============//
    <article data-variant="physical" className={classNames(styles.card, className)}>
      <div className={classNames(styles.posters_wrapper)} role="img">
        {isMobileScreen ? (
          <img src={bgPoster} className={classNames(styles.bg)} alt={version} />
        ) : null}
        <img
          src={poster}
          className={classNames({
            [styles.poster]: true,
            [styles.static]: !isMobileScreen
          })}
          alt={version}
        />

        <div className={classNames(styles.xl_wrapper)}>
          {isXLDesktopScreen ? (
            <h2 className={classNames(styles.title)}>{physicalEditionVariantTitle}</h2>
          ) : null}

          {isSmallTablet ? (
            <div className={classNames(styles.features_outer_container)}>
              <BackflipSide
                items={features}
                itemsAccessLimit={featuresAccessLimit}
                className={classNames({ [styles.features]: true })}
                containerStyles={classNames({
                  [styles.with_bg]: isSmallTablet,
                  [styles.features_container]: isSmallTablet
                })}
                prependEditionNameTo={prependEdition}
              />
            </div>
          ) : null}
        </div>
      </div>

      <div className={classNames('container', styles.container)}>
        {isMobileScreen ? (
          <>
            <div className={classNames(styles.price_wrapper)}>
              <Button
                variant="primary"
                as="a"
                href={links.preorder}
                content={preorderBtnText}
                className={classNames(styles.preorder_btn)}
              />
            </div>

            <div className={classNames(styles.card_text_content)}>
              <h2 className={classNames(styles.card_title)}>{version}</h2>

              <Icon name={ICON_NAME.LINE} className={styles.separator} role="separator" />

              <BackflipSide
                items={features}
                itemsAccessLimit={featuresAccessLimit}
                className={classNames(styles.features)}
                prependEditionNameTo={prependEdition}
              />
            </div>
          </>
        ) : null}

        {details ? (
          <div className={classNames(styles.description_wrapper)}>
            {isTabletScreen ? (
              <div role="separator" className={classNames(styles.divider_line)} />
            ) : null}

            <h3 className={classNames(styles.description_title)}>{details.title}</h3>

            {details.description.map((paragraph, index) => (
              <p key={index} className={classNames(styles.paragraph)}>
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}
      </div>

      <div className={classNames('container', styles.distributors_container)}>
        <div className={classNames(styles.price_wrapper)}>
          {isLaptopScreen ? (
            <button
              type="button"
              onClick={setIsModalOpened.bind(null, true)}
              className={classNames(styles.whats_inside_btn)}
            >
              {whatsInsideBtnText}

              <img src={zoomIcon} className={classNames(styles.zoom_icon)} alt="icon" />
            </button>
          ) : null}

          <Button
            variant="primary"
            as="a"
            href={links.preorder}
            content={preorderButton}
            className={classNames(styles.preorder_btn)}
          />

          <Button
            variant="inverse"
            iconName={ICON_NAME.DISCORD}
            href={links.allRetailers}
            as="a"
            content={retailersBtnText}
            className={classNames(styles.all_retailers_btn)}
          />
        </div>
      </div>

      {isModalOpened ? (
        <Modal
          closeButtonStyles={classNames(styles.modal_close_btn)}
          onClose={setIsModalOpened.bind(null, false)}
          configTransition={modalAnimationConfg ? modalAnimationConfg : () => modalAnimationConfig}
        >
          <div className="container">
            <img src={packContent} alt={version + ' ' + 'pack content'} />
          </div>
        </Modal>
      ) : null}
    </article>
    // ========= physical variant ===============//
  );
}

export default PreorderEditionCard;

export type PreorderEditionCardProps = Omit<Edition, 'bgPoster' | 'poster'> & {
  className?: string;
  bgPoster: string;
  poster: string;
  variant: 'digital' | 'physical';
  prependEditionNameTo?: number[];
  modalAnimationConfg?: () => ModalTransitionConfg;
};
