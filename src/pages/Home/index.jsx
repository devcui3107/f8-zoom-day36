import Button from "../../components/Button";
import styles from "./Home.module.scss";

const featuresList = [
  {
    label: "Responsive",
    srcImg: "/features-1.png",
  },
  {
    label: "Learning",
    srcImg: "/features-2.png",
  },
  {
    label: "Optimal UX/UI",
    srcImg: "/features-3.png",
  },
  {
    label: "Multidirectional",
    srcImg: "/features-4.png",
  },
];

function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInfo}>
        <h2 className={styles.heroTitle}>Chào mừng đến với F8 React Day 36</h2>
        <p className={styles.heroDesc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          veritatis facilis architecto voluptatum rem, iste a magnam dolorum
          commodi autem?
        </p>
        <Button size="large">View pricing</Button>
      </div>

      <div className={styles.heroFeatures}>
        <h3 className={styles.heroFeaturesTitle}>What will you get?</h3>
        <div className={styles.heroFeaturesList}>
          {featuresList &&
            featuresList.map((item) => (
              <div key={item.label} className={styles.heroFeaturesItem}>
                <img
                  className={styles.heroFeaturesImg}
                  src={item.srcImg}
                  alt=""
                />
                <span className={styles.heroFeaturesDesc}>{item.label}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
