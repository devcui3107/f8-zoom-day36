import { Outlet } from "react-router-dom";
import styles from "./DefaultLayout.module.scss";

// Components
import Header from "../components/Header";
import Footer from "./components/Footer";

function DefaultLayout() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
