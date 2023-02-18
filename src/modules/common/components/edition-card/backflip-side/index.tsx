import React from 'react';
import classNames from 'classnames';

import Icon from '../../icon';
import Tooltip from '../../tooltip';

import type { EditionFeature } from '../../../types/edition.type';
import { ICON_NAME } from '../../../types/icon.type';
import styles from './backflip-side.module.css';

function BackflipSide({ items, itemsAccessLimit, className, containerStyles }: BackflipSideProps) {
  return (
    <ul className={classNames(styles.list, containerStyles)}>
      {items.map(({ feature, icon, details }, index) => {
        const isAvailable = index < itemsAccessLimit;
        const itemStyle = isAvailable || !itemsAccessLimit ? '' : styles.item_disabled;

        return (
          <li className={classNames(styles.list_elem, itemStyle, className)} key={feature}>
            <Icon name={icon} className={classNames(styles.icon, styles.primary_color)} />

            <span className={styles.content} aria-describedby="editionfeatures">
              {feature}
            </span>

            {details ? (
              <div className={classNames(styles.tooltip_wrapper)}>
                <Icon
                  role="button"
                  tabIndex={0}
                  name={ICON_NAME.INFO}
                  className={classNames(styles.icon, styles.tooltip)}
                />

                <Tooltip
                  id="editionfeatures"
                  items={details}
                  keyExtractor={(detail) => detail.text}
                  className={styles.details}
                />
              </div>
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
  className?: string;
  containerStyles?: string;
}
