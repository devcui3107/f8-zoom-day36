import AdminNavbar from "../AdminNavbar";
import styles from "./AdminSidebar.module.scss";

function AdminSidebar() {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>Admin Panel</h2>
      <AdminNavbar />
    </div>
  );
}

export default AdminSidebar;
