import { NavLink } from "react-router-dom";
import styles from "./AdminNavbar.module.scss";

const navBarList = [
  {
    to: "/admin",
    title: "Dashboard",
  },
  {
    to: "/admin/users",
    title: "Users",
  },
  {
    to: "/admin/settings",
    title: "Settings",
  },
];

function AdminNavbar() {
  return (
    <ul className={styles.navbarList}>
      {navBarList &&
        navBarList.map((navItem) => (
          <li key={navItem.title} className={styles.navbarItem}>
            <NavLink
              to={navItem.to}
              end
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              {navItem.title}
            </NavLink>
          </li>
        ))}
    </ul>
  );
}

export default AdminNavbar;
