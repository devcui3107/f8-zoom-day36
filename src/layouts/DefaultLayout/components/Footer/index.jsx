import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import bgFooter from "/bg-footer.svg";
import Button from "../../../../components/Button";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.footerBg} src={bgFooter} alt="" />
      <div className={styles.footerRow}>
        <h2 className={styles.footerText}>Page Footer for Client</h2>
        <div className={styles.footerLinks}>
          <Link to="contact">
            <Button size="small">Contact</Button>
          </Link>
          <Link to="privacy">
            <Button size="small">Privacy</Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
