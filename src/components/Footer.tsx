import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.footerLogo}>JW</Link>
          <p className={styles.footerTagline}>I can make websites, too.</p>
        </div>
        <div className={styles.footerLinks}>
          <h4>Navigation</h4>
          <Link href="#about">About</Link>
          <Link href="#work">Work</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className={styles.footerSocial}>
          <h4>Connect</h4>
          <motion.a 
            href="https://github.com/Beans69584" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-github"></i>
          </motion.a>
          <motion.a 
            href="mailto:jacobdw183@gmail.com"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-envelope"></i>
          </motion.a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Jacob Walton. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;