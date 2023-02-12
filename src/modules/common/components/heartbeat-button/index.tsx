import classNames from 'classnames';

import styles from './heartbeat-button.module.css';

function HeartbeatButton({ content, className, ...restProps }: HeartbeatButtonProps) {
  return (
    <a className={classNames(styles.button, className)} {...restProps}>
      <span className={styles.content}>{content}</span>
      <div className={styles.animation_holder} />
    </a>
  );
}

export default HeartbeatButton;

export type HeartbeatButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  content: string;
};
