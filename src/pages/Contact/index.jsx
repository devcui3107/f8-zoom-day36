import styles from "./Contact.module.scss";

function Contact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.contactTitle}>Contact Us</h2>
      <p className={styles.contactDesc}>
        Have questions? Need support? We’re here to help! Our team is ready to
        answer your inquiries, provide guidance, and assist you with any
        requests. Please fill out the form below, and we’ll get back to you as
        soon as possible.
      </p>
      <p className={styles.contactDesc}>
        At F8 React Day 36, we strive to provide the best learning experience
        and support to our community. Whether it’s about courses, workshops, or
        technical issues, feel free to reach out. Your feedback is valuable and
        helps us improve our services.
      </p>

      <form className={styles.contactForm}>
        <div className={styles.contactGroup}>
          <label htmlFor="name" className={styles.contactLabel}>
            Name
          </label>
          <input
            type="text"
            id="name"
            className={styles.contactInput}
            placeholder="Your full name"
          />
        </div>

        <div className={styles.contactGroup}>
          <label htmlFor="email" className={styles.contactLabel}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.contactInput}
            placeholder="Your email address"
          />
        </div>

        <div className={styles.contactGroup}>
          <label htmlFor="message" className={styles.contactLabel}>
            Message
          </label>
          <textarea
            id="message"
            className={styles.contactTextarea}
            placeholder="Your message..."
            rows="6"
          ></textarea>
        </div>

        <button type="submit" className={styles.contactBtn}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
