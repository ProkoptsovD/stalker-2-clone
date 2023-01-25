import styles from './checkbox.module.css';

function Checkbox({ withContent, wrapperClassName, checked, name, ...inputProps }: CheckboxProps) {
  const isWithStringContent = typeof withContent === 'string';
  const WithComponentContent = withContent as React.FunctionComponent;

  const contentClass = `${styles.wrapper} ${withContent ? styles.has_content : ''} ${
    wrapperClassName ? wrapperClassName : ''
  }`;

  return (
    <label className={contentClass}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        name={name}
        {...inputProps}
      />

      {withContent && isWithStringContent ? (
        <p className={styles.content}>{withContent}</p>
      ) : (
        <WithComponentContent />
      )}
    </label>
  );
}

export default Checkbox;

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  withContent?: string | React.FunctionComponent;
  wrapperClassName?: string;
  checked?: boolean;
  name?: string;
}
