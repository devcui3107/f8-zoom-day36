import styles from "./Button.module.scss";

function Button({ size = "medium", children }) {
  return (
    <button className={`${styles.wrapper} ${styles[size]}`}>{children}</button>
  );
}

export default Button;
