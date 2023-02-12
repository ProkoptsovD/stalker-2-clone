import React from 'react';
import classNames from 'classnames';

import {
  activationEmailSentHeadline,
  activationEmailSentText
} from '../../constants/activation-email-sent.const';

import styles from './activation-email-sent.module.css';

const ActivationEmailSent = React.forwardRef<HTMLDivElement, ActivationEmailSentProps>(
  ({ text = activationEmailSentText, title = activationEmailSentHeadline, className }, ref) => {
    return (
      <div ref={ref} className={classNames(styles.wrapper, className)}>
        <strong className={classNames(styles.title)}>{title}</strong>
        <p className={classNames(styles.text)}>{text}</p>
      </div>
    );
  }
);

export default ActivationEmailSent;

export type ActivationEmailSentProps = {
  title?: string;
  text?: string;
  className?: string;
};
