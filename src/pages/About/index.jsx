import styles from "./About.module.scss";

const aboutFeatures = [
  {
    label: "Our Mission",
    desc: "Deliver high-quality education and resources for developers worldwide.",
  },
  {
    label: "Our Vision",
    desc: "Empower every learner to achieve their full potential.",
  },
  {
    label: "Our Values",
    desc: "Innovation, transparency, collaboration, and continuous improvement.",
  },
];

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutHeader}>
        <h2 className={styles.aboutTitle}>About Us</h2>
        <p className={styles.aboutDesc}>
          We are committed to providing the best learning experience for
          developers. Our platform combines practical examples, expert guidance,
          and a supportive community to help you grow your skills.
        </p>
      </div>
      <div className={styles.aboutFeatures}>
        {aboutFeatures.map((item) => (
          <div key={item.label} className={styles.aboutFeatureItem}>
            <h3 className={styles.aboutFeatureTitle}>{item.label}</h3>
            <p className={styles.aboutFeatureDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
