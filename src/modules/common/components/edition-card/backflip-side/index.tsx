import classNames from 'classnames';

import Icon from '../../icon';
import Tooltip from '../../tooltip';

import type { EditionFeature } from '../../../types/edition.type';
import { ICON_NAME } from '../../../types/icon.type';
import styles from './backflip-side.module.css';

function BackflipSide({ items, itemsAccessLimit }: BackflipSideProps) {
  return (
    <ul className={styles.list}>
      {items.map(({ feature, icon, details }, index) => {
        const isAvailable = index < itemsAccessLimit;
        const itemStyle = isAvailable ? '' : styles.item_disabled;

        return (
          <li className={`${styles.list_elem} ${itemStyle}`} key={feature}>
            <Icon name={icon} className={classNames(styles.icon, styles.primary_color)} />

            <span className={styles.content} aria-describedby="editionfeatures">
              {feature}
            </span>

            {details ? (
              <>
                <Icon name={ICON_NAME.INFO} className={classNames(styles.icon, styles.tooltip)} />

                <Tooltip
                  id="editionfeatures"
                  items={details}
                  keyExtractor={(detail) => detail.text}
                />
              </>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export default BackflipSide;

export interface BackflipSideProps {
  items: EditionFeature[];
  itemsAccessLimit: number;
}
