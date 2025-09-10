import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className={styles.notfound}>
      <h2 className={styles.notfoundTitle}>404</h2>
      <p className={styles.notfoundDesc}>
        Oops! The page you are looking for does not exist.
      </p>
      <div className={styles.notfoundBtn}>
        <Link to="/">Go Back Home</Link>
      </div>
    </div>
  );
}
export default NotFound;
