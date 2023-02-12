import classNames from 'classnames';

import styles from './input.module.css';

function Input({
  label,
  labelClassName,
  inputClassName,
  wrapperClassName,
  ...inputProps
}: InputProps) {
  return (
    <div className={classNames(styles.wrapper, wrapperClassName)}>
      {label ? (
        <label htmlFor={label} className={classNames(styles.label, labelClassName)}>
          {label}
        </label>
      ) : null}

      <input id={label} className={classNames(styles.input, inputClassName)} {...inputProps} />
    </div>
  );
}

export default Input;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  wrapperClassName?: string;
}
