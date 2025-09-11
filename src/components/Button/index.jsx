import clsx from "clsx";
import styles from "./Button.module.scss";

function Button({
  size = "medium",
  noShadow = false,
  disabled = false,
  className,
  children,
  onClick,
}) {
  const classNames = clsx(className, styles.wrapper, [styles[size]], {
    [styles.disabled]: disabled,
    [styles.noShadow]: noShadow,
  });

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}

export default Button;
