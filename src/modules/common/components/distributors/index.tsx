import classNames from 'classnames';

import { ICON_NAME } from '../../types/icon.type';

import Icon from '../icon';
import styles from './distributors.module.css';

function Distributors({ className = '', items }: DistributorsProps) {
  const lastIcon = items.length - 1;

  return (
    <ul className={classNames(styles.list, className)}>
      {items.map((distibutor, idx) => (
        <li key={distibutor}>
          <Icon name={distibutor} className={styles.icon} />

          {idx === lastIcon ? <Icon name={ICON_NAME.XS_SERIES} className={styles.icon} /> : null}
        </li>
      ))}
    </ul>
  );
}

export default Distributors;

export type DistributorsProps = {
  className?: string;
  items: DistributorsIcons[];
};

export type DistributorsIcons = ICON_NAME;
