import styles from "./Privacy.module.scss";

function Privacy() {
  return (
    <div className={styles.privacy}>
      <h2 className={styles.privacyTitle}>Privacy Policy</h2>
      <p className={styles.privacyDesc}>
        At F8 React Day 36, your privacy is very important to us. This Privacy
        Policy explains how we collect, use, and protect your personal
        information when you use our website.
      </p>

      <div className={styles.privacyContent}>
        <h3>1. Information We Collect</h3>
        <p>
          We may collect your name, email address, and any other information you
          provide when you contact us or register for our services.
        </p>

        <h3>2. How We Use Your Information</h3>
        <p>
          Your information is used to improve our services, communicate with
          you, and provide you with updates. We do not sell your personal
          information to third parties.
        </p>

        <h3>3. Security</h3>
        <p>
          We implement reasonable security measures to protect your data.
          However, no method of transmission over the internet is completely
          secure.
        </p>

        <h3>4. Cookies</h3>
        <p>
          Our website may use cookies to enhance your experience. You can
          disable cookies in your browser settings if you prefer.
        </p>

        <h3>5. Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. We encourage you
          to review it periodically for any changes.
        </p>
      </div>
    </div>
  );
}

export default Privacy;
