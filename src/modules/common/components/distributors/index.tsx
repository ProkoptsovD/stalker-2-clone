import { ICON_NAME } from '../../types/icon.type';
import Icon from '../icon';
import styles from './distributors.module.css';

function Distributors({ className = '', items }: DistributorsProps) {
  return (
    <ul className={`${styles.list} ${className}`}>
      {items.map((distibutor) => (
        <li key={distibutor}>
          <Icon name={distibutor} className={styles.icon} />
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
