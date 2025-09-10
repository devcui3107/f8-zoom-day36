import { Link } from "react-router-dom";
import styles from "./Login.module.scss";

function Login() {
  return (
    <div className={styles.login}>
      <h2 className={styles.loginTitle}>Welcome Back!</h2>
      <p className={styles.loginDesc}>
        Please log in to continue using the application.
      </p>

      <form className={styles.loginForm}>
        <div className={styles.loginGroup}>
          <label htmlFor="email" className={styles.loginLabel}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.loginInput}
            placeholder="Enter your email"
          />
        </div>

        <div className={styles.loginGroup}>
          <label htmlFor="password" className={styles.loginLabel}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.loginInput}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className={styles.loginBtn}>
          Log In
        </button>

        <p className={styles.loginFooter}>
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
