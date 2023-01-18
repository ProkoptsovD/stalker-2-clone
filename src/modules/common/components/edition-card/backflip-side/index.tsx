import type { EditionFeature } from '../../../types/edition.type';
import { ICON_NAME } from '../../../types/icon.type';
import Icon from '../../icon';
import styles from './backflip-side.module.css';

function BackflipSide({ items, itemsAccessLimit }: BackflipSideProps) {
  return (
    <ul className={styles.list}>
      {items.map(({ feature, icon, details }, index) => {
        const isAvailable = index < itemsAccessLimit;
        const itemStyle = isAvailable ? '' : styles.item_disabled;

        return (
          <li className={`${styles.list_elem} ${itemStyle}`} key={feature}>
            <Icon name={icon} className={`${styles.icon} ${styles.primary_color}`} />

            <span className={styles.content} aria-describedby="editionfeatures">
              {feature}
            </span>

            {details ? (
              <>
                <Icon name={ICON_NAME.INFO} className={`${styles.icon} ${styles.tooltip}`} />

                {details.length > 1 ? (
                  <ul className={styles.tooltip_body} role="tooltip" id="editionfeatures">
                    {details ? details.map(({ text }) => <li key={text}>{text}</li>) : null}
                  </ul>
                ) : (
                  <p className={styles.tooltip_body}>{details[0].text}</p>
                )}
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
