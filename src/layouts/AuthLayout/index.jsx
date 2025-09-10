import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import AuthSidebar from "./components/AuthSidebar";
import styles from "./AuthLayout.module.scss";

function AuthLayout() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <AuthSidebar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
