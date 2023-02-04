import classNames from 'classnames';
import styles from './preview-card.module.css';

function PreviewCard({ className, children, ...restProps }: PreviewCardProps) {
  return (
    <div className={classNames(styles.preview, className)} {...restProps}>
      {children}
    </div>
  );
}

export default PreviewCard;

export type PreviewCardProps = React.HTMLAttributes<HTMLDivElement>;
