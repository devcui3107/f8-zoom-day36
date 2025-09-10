import { Link } from "react-router-dom";
import styles from "./Register.module.scss";

function Register() {
  return (
    <div className={styles.register}>
      <h2 className={styles.registerTitle}>Create an Account</h2>
      <p className={styles.registerDesc}>
        Join us today and start your journey!
      </p>

      <form className={styles.registerForm}>
        <div className={styles.registerGroup}>
          <label htmlFor="name" className={styles.registerLabel}>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className={styles.registerInput}
            placeholder="Enter your full name"
          />
        </div>

        <div className={styles.registerGroup}>
          <label htmlFor="email" className={styles.registerLabel}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.registerInput}
            placeholder="Enter your email"
          />
        </div>

        <div className={styles.registerGroup}>
          <label htmlFor="password" className={styles.registerLabel}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.registerInput}
            placeholder="Create a password"
          />
        </div>

        <div className={styles.registerGroup}>
          <label htmlFor="confirmPassword" className={styles.registerLabel}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className={styles.registerInput}
            placeholder="Re-enter your password"
          />
        </div>

        <button type="submit" className={styles.registerBtn}>
          Sign Up
        </button>

        <p className={styles.registerFooter}>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
