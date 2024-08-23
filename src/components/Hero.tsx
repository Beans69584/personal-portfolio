import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';
import { smoothScroll } from '../utils/smoothScroll';

const devIconSets = [
  ["html5", "css3", "javascript", "react", "angular", "vuejs", "sass", "webpack", "gulp", "npm"],
  ["nodejs", "php", "laravel", "django", "flask", "ruby", "rails", "spring", "dotnetcore"],
  ["postgresql", "mysql", "mongodb", "redis", "oracle", "microsoftsqlserver", "sqlite", "mariadb"],
  ["docker", "kubernetes", "jenkins", "ansible", "terraform", "vagrant"],
  ["git", "github", "gitlab", "bitbucket", "jira", "trello"],
  ["amazonwebservices", "googlecloud", "azure", "heroku", "nginx", "apache"],
  ["typescript", "python", "java", "csharp", "cplusplus", "go", "rust", "scala", "kotlin", "swift"]
];

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundAnimation}>
        {devIconSets.map((iconSet, rowIndex) => (
          <div key={rowIndex} className={styles.iconRow} style={{ animationDuration: `${100 + rowIndex * 20}s` }}>
            {[...iconSet, ...iconSet, ...iconSet, ...iconSet].map((icon, iconIndex) => (
              <i
                key={`${rowIndex}-${iconIndex}`}
                className={`devicon-${icon}-plain colored ${styles.icon}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className={styles.heroContent}>
        <motion.div
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
            Featured Projects <i className="fas fa-arrow-right"></i>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;