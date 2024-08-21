import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';
import { smoothScroll } from '../utils/smoothScroll';

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <motion.div 
        className={styles.heroContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Jacob Walton</h1>
        <p className={styles.tagline}>Full-Stack Developer</p>
        <p className={styles.intro}>I have a passion for creating user-friendly, responsive and intuitive websites. I'm always looking for new opportunities to bring people's ideas to life.</p>
        <motion.button
  className={styles.ctaButton}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => smoothScroll('work')}
>
  Let's Create Together <i className="fas fa-arrow-right"></i>
</motion.button>
      </motion.div>
      <div className={styles.heroVisual}>
        <motion.div 
          className={`${styles.shape} ${styles.shape1}`}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={`${styles.shape} ${styles.shape2}`}
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 7,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={`${styles.shape} ${styles.shape3}`}
          animate={{ 
            y: [-20, 0, -20],
            rotate: [5, 0, 5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Hero;