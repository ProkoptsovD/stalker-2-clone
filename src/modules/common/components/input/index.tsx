import styles from './input.module.css';

function Input({
  label,
  labelClassName,
  inputClassName,
  wrapperClassName,
  ...inputProps
}: InputProps) {
  return (
    <div className={`${styles.wrapper} ${wrapperClassName ?? ''}`}>
      {label ? (
        <label htmlFor={label} className={`${styles.label} ${labelClassName ?? ''}`}>
          {label}
        </label>
      ) : null}

      <input id={label} className={`${styles.input} ${inputClassName ?? ''}`} {...inputProps} />
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
