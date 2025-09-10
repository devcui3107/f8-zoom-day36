import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const navBarList = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/posts",
    title: "Posts",
  },
];

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navbarList}>
          {navBarList &&
            navBarList.map((navItem) => (
              <li key={navItem.title} className={styles.navbarItem}>
                <NavLink
                  to={navItem.to}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
