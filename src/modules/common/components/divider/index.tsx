import { ICON_NAME } from '../../types/icon.type';
import Icon, { IconProps } from '../icon';

import styles from './divider.module.css';

function Divider({ className, variant = 'radiation', ...props }: DividerProps) {
  const icon = variant === 'radiation' ? ICON_NAME.RADIATION_LINE : ICON_NAME.W_LINE;

  return <Icon name={icon} className={`${styles.divider} ${className}`} {...props} />;
}

export default Divider;

export type DividerProps = Omit<IconProps, 'name'> & {
  variant?: 'radiation' | 'hr-line';
};
