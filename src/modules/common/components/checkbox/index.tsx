import styles from './checkbox.module.css';

function Checkbox({ withContent, wrapperClassName, checked, ...inputProps }: CheckboxProps) {
  const contentClass = `${styles.wrapper} ${withContent ? styles.has_content : ''} ${
    wrapperClassName ? wrapperClassName : ''
  }`;

  return (
    <label className={contentClass}>
      <input className={styles.checkbox} type="checkbox" checked={checked} {...inputProps} />

      {withContent ? <p className={styles.content}>{withContent}</p> : null}
    </label>
  );
}

export default Checkbox;

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  withContent?: string;
  wrapperClassName?: string;
  checked?: boolean;
}
