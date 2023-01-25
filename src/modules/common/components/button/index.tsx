import React from 'react';
import { BEFORE_AFTER_ICONS, MAIN_ICON } from '../../constants/button-icons.const';
import { ICON_NAME } from '../../types/icon.type';
import Icon from '../icon';
import styles from './button.module.css';

const classNames = {
  primary: styles.primary,
  secondary: styles.secondary,
  inverse: styles.inverse
};

function Button({
  content,
  iconName,
  onClick,
  href,
  preventDefault = true,
  variant = 'primary',
  as = 'a',
  className = '',
  disabled,
  type,
  ...restProps
}: ButtonProps) {
  const variantClassName = classNames[variant];
  const key = variant as keyof typeof BEFORE_AFTER_ICONS;

  const iconBefore = BEFORE_AFTER_ICONS[key].before;
  const iconAfter = BEFORE_AFTER_ICONS[key].after;
  const mainIcon = MAIN_ICON[key];

  function handleClick(event: React.MouseEvent<any>) {
    if (preventDefault) event.preventDefault();

    if (onClick) onClick(event);
  }

  return as === 'a' ? (
    <a
      className={`${styles.button} ${variantClassName} ${
        disabled ? styles.disabled : ''
      } ${className}`}
      href={href ?? ''}
      onClick={handleClick}
      {...restProps}
    >
      <Icon name={iconBefore} className={`${styles.before}`} />
      <Icon name={mainIcon} className={`${styles.main_icon}`} />

      <span className={`${styles.content_part}`}>{content}</span>

      <Icon name={iconAfter} className={styles.after} />
    </a>
  ) : (
    <button
      className={`${styles.button} ${variantClassName} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      type={type ?? 'button'}
      {...restProps}
    >
      <Icon name={iconBefore} className={`${styles.before}`} />
      <Icon name={mainIcon} className={`${styles.main_icon}`} />

      <span className={`${styles.content_part}`}>{content}</span>

      <Icon name={iconAfter} className={styles.after} />
    </button>
  );
}

export default Button;

export type ButtonProps = {
  content: string;
  iconName?: ICON_NAME;
  preventDefault?: boolean;
  href?: string;
  variant: 'primary' | 'secondary' | 'inverse';
  as: 'button' | 'a';
  onClick?: (params: unknown) => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};
