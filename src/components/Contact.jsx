import React, { useState, useEffect } from "react";
import styles from "../styles/contact.module.css";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7) {
          setAnimate(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="contact-section" className={styles.section}>
      {/* Heading & Paragraph Animation */}
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={styles.container}>
          <h2>Contact Us</h2>
          <p style={{ fontSize: "14px" }}>
            Have questions or need assistance? Our team is here to help!
          </p>
        </div>
      </motion.div>

      <div className={styles.container}>
        <div className={styles.row}>
          {/* Contact Info Section Animation */}
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            animate={animate ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }} // GPU Optimization
          >
            <div className={styles.contactInfoItem}>
              <div className={styles.contactInfoIcon}>
                <FaHome />
              </div>
              <div className={styles.contactInfoContent}>
                <h4>Address</h4>
                <p>4671 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactInfoIcon}>
                <FaPhone />
              </div>
              <div className={styles.contactInfoContent}>
                <h4>Phone</h4>
                <p>571-457-2321</p>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactInfoIcon}>
                <FaEnvelope />
              </div>
              <div className={styles.contactInfoContent}>
                <h4>Email</h4>
                <p>ntamerrwael@mfano.ga</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Animation */}
          <motion.div
            className={styles.contactForm}
            initial={{ opacity: 0, x: 50 }}
            animate={animate ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }} // GPU Optimization
          >
            <form>
              <h2>Send Message</h2>
              <div className={styles.inputBox}>
                <input type="text" required />
                <span>Full Name</span>
              </div>
              <div className={styles.inputBox}>
                <input type="email" required />
                <span>Email</span>
              </div>
              <div className={styles.inputBox}>
                <textarea required></textarea>
                <span>Type your Message...</span>
              </div>
              <div className={styles.inputBox}>
                <input type="submit" value="Send" />
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
