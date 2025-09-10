import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className={styles.notfound}>
      <h2 className={styles.notfoundTitle}>404</h2>
      <p className={styles.notfoundDesc}>
        Oops! The page you are looking for does not exist.
      </p>
      <a href="/" className={styles.notfoundBtn}>
        Go Back Home
      </a>
    </div>
  );
}
export default NotFound;
