import styles from './heartbeat-button.module.css';

function HeartbeatButton({ content, className, ...restProps }: HeartbeatButtonProps) {
  return (
    <a className={`${className ?? ''} ${styles.button}`} {...restProps}>
      <span className={styles.content}>{content}</span>
      <div className={styles.animation_holder} />
    </a>
  );
}

export default HeartbeatButton;

export type HeartbeatButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  content: string;
};
