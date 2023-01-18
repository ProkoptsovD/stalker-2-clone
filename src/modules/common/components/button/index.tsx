import React from 'react';
import { ICON_NAME } from '../../types/icon.type';
import Icon from '../icon';
import styles from './button.module.css';

function Button({
  content,
  iconName,
  onClick,
  href,
  preventDefault = true,
  variant = 'primary',
  as = 'a',
  ...restProps
}: ButtonProps) {
  const isPrimaryVariant = variant === 'primary';
  const iconBefore = isPrimaryVariant ? ICON_NAME.ORANGE_BEFORE : ICON_NAME.WHITE_BEFORE;
  const mainIcon = iconName ? iconName : isPrimaryVariant ? ICON_NAME.CART : ICON_NAME.EMAIL_02;
  const variantClassName = isPrimaryVariant ? '' : styles.secondary;

  function handleClick(event: React.MouseEvent<any>) {
    if (preventDefault) event.preventDefault();

    if (onClick) onClick(event);
  }

  return as === 'a' ? (
    <a className={styles.button} href={href ?? ''} onClick={handleClick} {...restProps}>
      <Icon name={iconBefore} className={`${styles.before} ${variantClassName}`} />
      <Icon name={mainIcon} className={`${styles.main_icon} ${variantClassName}`} />

      <span className={`${styles.content_part} ${variantClassName}`}>{content}</span>

      <Icon name={ICON_NAME.WHITE_AFTER} className={styles.after} />
    </a>
  ) : (
    <button className={styles.button} onClick={handleClick} {...restProps}>
      <Icon name={iconBefore} className={`${styles.before} ${variantClassName}`} />
      <Icon name={mainIcon} className={`${styles.main_icon} ${variantClassName}`} />

      <span className={`${styles.content_part} ${variantClassName}`}>{content}</span>

      <Icon name={ICON_NAME.WHITE_AFTER} className={styles.after} />
    </button>
  );
}

export default Button;

export type ButtonProps = {
  content: string;
  iconName?: ICON_NAME;
  preventDefault?: boolean;
  href?: string;
  variant: 'primary' | 'secondary';
  as: 'button' | 'a';
  onClick?: (params: unknown) => void;
};
