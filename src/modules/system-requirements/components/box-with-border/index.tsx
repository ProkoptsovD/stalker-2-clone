import classNames from 'classnames';

import styles from './box-with-border.module.css';

function BoxWithBorder({
  title,
  className,
  appendSemicolumn = true,
  innerWrapper,
  children,
  ...restProps
}: BoxWithBorderProps) {
  return (
    <div className={classNames(styles.box, className)}>
      {title ? (
        <h4 className={classNames({ [styles.title]: true, [styles.semicolumn]: appendSemicolumn })}>
          {title}
        </h4>
      ) : null}
      <div className={classNames(styles.content_holder)}>
        <div className={classNames(styles.inner_content_holder, innerWrapper)}>
          {children(restProps)}
        </div>
      </div>
    </div>
  );
}

export default BoxWithBorder;

export type BoxWithBorderProps = {
  title?: string;
  className?: string;
  innerWrapper?: string;
  appendSemicolumn?: boolean;
  children: <T extends object>(props: T) => JSX.Element;
};
