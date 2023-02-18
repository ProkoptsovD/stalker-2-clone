import classNames from 'classnames';

import Button from '../button';
import Icon from '../icon';
import BackflipSide from '../edition-card/backflip-side';
import Distributors from '../distributors';

import type { Edition } from '../../types/edition.type';
import { ICON_NAME } from '../../types/icon.type';
import { preorderBtnText } from '../../constants/preorder-edition-card.const';
import { distributorList } from '../../constants/distributors.const';

import styles from './preorder-edition-card.module.css';
import useMediaQuery from '../../../../hooks/use-media-query';

function PreorderEditionCard({
  bgPoster,
  cost,
  features,
  featuresAccessLimit,
  poster,
  version,
  details,
  className
}: PreorderEditionCardProps) {
  const isMobileScreen = useMediaQuery('(max-width: 639px)');
  const isTabletScreen = useMediaQuery('(min-width: 768px)');

  return (
    <article className={classNames(styles.card, className)} onClick={(e) => console.log(e.target)}>
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
          <BackflipSide
            items={features}
            itemsAccessLimit={featuresAccessLimit}
            className={classNames({ [styles.features]: true })}
            containerStyles={classNames({
              [styles.with_bg]: isTabletScreen,
              [styles.features_container]: isTabletScreen
            })}
          />
        ) : null}
      </div>

      <div className={classNames('container', styles.container)}>
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

            <BackflipSide
              items={features}
              itemsAccessLimit={featuresAccessLimit}
              className={classNames(styles.features)}
            />
          </div>
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

        <Distributors items={distributorList} className={classNames(styles.distributors)} />
      </div>

      {isMobileScreen ? (
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
  );
}

export default PreorderEditionCard;

export type PreorderEditionCardProps = Omit<Edition, 'bgPoster' | 'poster'> & {
  className?: string;
  bgPoster: string;
  poster: string;
};
