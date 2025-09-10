import styles from "./Footer.module.scss";
import bgFooter from "/bg-footer.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.footerBg} src={bgFooter} alt="" />
      <h2 className={styles.footerText}>Page Footer for Client</h2>
    </footer>
  );
}

export default Footer;
