import { Link } from "react-router-dom";
import styles from "./AdminHeader.module.scss";

function AdminHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerSearch}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <div className={styles.headerActions}>
        <Link to="/profile">
          <button className={styles.headerBtn}>Profile</button>
        </Link>

        <Link to="/">
          <button className={styles.headerBtn}>Logout</button>
        </Link>
      </div>
    </header>
  );
}

export default AdminHeader;
