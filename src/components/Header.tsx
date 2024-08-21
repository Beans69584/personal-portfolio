// Header.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Header.module.css';
import { smoothScroll } from '../utils/smoothScroll';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  const handleNavClick = (sectionId: string) => {
    smoothScroll(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        <button onClick={() => smoothScroll('home')} className={`${styles.navLogo} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <span className={styles.logoText}>JW</span>
          <span className={styles.logoDot}></span>
        </button>
        <button 
          className={`${styles.navToggle} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className={styles.mobileMenu}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.ul className={styles.mobileNavMenu}>
                {['about', 'work', 'contact'].map((item, index) => (
                  <motion.li 
                    key={item} 
                    className={styles.mobileNavItem}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ delay: index * 0.1 }}
                  >
                    <button 
                      className={styles.mobileNavLink}
                      onClick={() => handleNavClick(item)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
        <ul className={styles.desktopNavMenu}>
          {['about', 'work', 'contact'].map((item) => (
            <li key={item} className={styles.navItem}>
              <button className={styles.navLink} onClick={() => handleNavClick(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;