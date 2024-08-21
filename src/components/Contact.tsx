import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  return (
    <motion.section 
      id="contact" 
      className={styles.contactSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.contactContent}>
        <h2>Let's Collaborate</h2>
        <p>I'm always excited to discuss new projects and opportunities. Whether you have a specific idea or are looking for consultation, I'm here to help bring your vision to life.</p>
        <div className={styles.contactOptions}>
          <motion.a 
            href="mailto:jacob-walton@konpeki.co.uk" 
            className={`${styles.ctaButton} ${styles.primary}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reach Out <i className="fas fa-paper-plane"></i>
          </motion.a>
          <motion.a 
            href="/assets/CV_Jacob_Walton.pdf"
            download 
            className={`${styles.ctaButton} ${styles.secondary}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV <i className="fas fa-file-download"></i>
          </motion.a>
        </div>
      </div>
      <div className={styles.contactAnimation}>
        <div className={styles.circleContainer}>
          <motion.div 
            className={styles.circle}
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className={styles.circle}
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className={styles.circle}
            animate={{ 
              y: [-20, 0, -20],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;