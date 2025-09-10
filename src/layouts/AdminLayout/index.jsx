import { Outlet } from "react-router-dom";
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import AdminFooter from "./components/AdminFooter";
import styles from "./AdminLayout.module.scss";

function AdminLayout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <AdminSidebar />
      </div>

      <div className={styles.main}>
        <AdminHeader />
        <div className={styles.content}>
          <Outlet />
        </div>
        <AdminFooter />
      </div>
    </div>
  );
}

export default AdminLayout;
