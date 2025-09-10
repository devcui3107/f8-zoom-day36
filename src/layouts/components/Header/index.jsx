import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Button from "../../../components/Button";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <h1 className={styles.logoText}>
            <Link to="/">Logo</Link>
          </h1>
          <Navbar />
          <div className={styles.ctrl}>
            <Link to="/admin">
              <Button size="small">Dashboard</Button>
            </Link>
            <Link to="/register">
              <Button size="small">Signup</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
