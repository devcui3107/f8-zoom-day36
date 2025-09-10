import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.footerBg} src="/bg-footer.svg" alt="" />
      <h2 className={styles.footerText}>Page Footer for Client</h2>
    </footer>
  );
}

export default Footer;
