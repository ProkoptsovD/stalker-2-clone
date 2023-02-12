import React from 'react';
import classNames from 'classnames';

import { BEFORE_AFTER_ICONS, MAIN_ICON } from '../../constants/button-icons.const';
import { ICON_NAME } from '../../types/icon.type';

import Icon from '../icon';
import styles from './button.module.css';

const classNamesMap = {
  primary: styles.primary,
  secondary: styles.secondary,
  inverse: styles.inverse,
  white: styles.white
};

function Button({
  content,
  iconName,
  onClick,
  href,
  preventDefault = false,
  variant = 'primary',
  as = 'a',
  className = '',
  disabled,
  type,
  ...restProps
}: ButtonProps) {
  const variantClassName = classNamesMap[variant];
  const key = variant as keyof typeof BEFORE_AFTER_ICONS;

  const iconBefore = BEFORE_AFTER_ICONS[key].before;
  const iconAfter = BEFORE_AFTER_ICONS[key].after;
  const mainIcon = iconName ?? MAIN_ICON[key];

  function handleClick(event: React.MouseEvent<any>) {
    if (preventDefault) event.preventDefault();

    if (onClick) onClick(event);
  }

  return as === 'a' ? (
    <a
      className={classNames({
        [styles.button]: true,
        [variantClassName]: true,
        [styles.disabled]: disabled,
        [className]: className
      })}
      href={href ?? ''}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferer"
      {...restProps}
    >
      <Icon name={iconBefore} className={`${styles.before}`} />

      <span className={styles.content_part}>
        <Icon name={mainIcon} className={styles.main_icon} />
        {content}
      </span>

      <Icon name={iconAfter} className={styles.after} />
    </a>
  ) : (
    <button
      className={classNames(styles.button, variantClassName, className)}
      onClick={handleClick}
      disabled={disabled}
      type={type ?? 'button'}
      {...restProps}
    >
      <Icon name={iconBefore} className={styles.before} />

      <span className={styles.content_part}>
        <Icon name={mainIcon} className={styles.main_icon} />
        {content}
      </span>

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
  variant: 'primary' | 'secondary' | 'inverse' | 'white';
  as: 'button' | 'a';
  onClick?: (params: unknown) => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};
