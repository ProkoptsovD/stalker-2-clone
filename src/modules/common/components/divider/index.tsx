import { ICON_NAME } from '../../types/icon.type';
import Icon, { IconProps } from '../icon';

import styles from './divider.module.css';

function Divider({ className, ...props }: DividerProps) {
  return (
    <Icon name={ICON_NAME.RADIATION_LINE} className={`${styles.divider} ${className}`} {...props} />
  );
}

export default Divider;

export type DividerProps = Omit<IconProps, 'name'> & {};
