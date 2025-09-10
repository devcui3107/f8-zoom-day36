import styles from "./Loading.module.scss";

function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loader}></div>
      <span className={styles.loadingText}>Loading...</span>
    </div>
  );
}

export default Loading;
