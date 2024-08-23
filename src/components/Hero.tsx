import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';
import { smoothScroll } from '../utils/smoothScroll';

const devIconSets = [
  ["html5", "css3", "javascript", "typescript", "react", "angular", "vuejs", "nodejs", "express", "nestjs", "sass", "webpack", "gulp", "npm", "yarn", "babel", "bootstrap", "tailwindcss", "jquery", "materialui"],
  ["php", "laravel", "symfony", "codeigniter", "ruby", "rails", "python", "django", "flask", "java", "spring", "dotnetcore", "csharp", "go", "rust", "scala", "kotlin", "swift", "dart", "elixir"],
  ["postgresql", "mysql", "mongodb", "redis", "oracle", "microsoftsqlserver", "sqlite", "mariadb", "couchdb", "cassandra", "elasticsearch", "neo4j", "graphql", "influxdb"],
  ["docker", "kubernetes", "jenkins", "ansible", "terraform", "vagrant", "prometheus", "grafana", "nginx", "apache", "consul", "rancher", "git", "github", "gitlab", "bitbucket"],
  ["amazonwebservices", "googlecloud", "azure", "heroku", "digitalocean", "firebase", "cloudflare", "openstack", "vercel", "netlify", "linux", "ubuntu", "debian", "centos", "fedora", "redhat"],
  ["vscode", "intellij", "phpstorm", "pycharm", "webstorm", "atom", "vim", "bash", "powershell", "jira", "trello", "confluence", "slack", "visualstudio"],
  ["photoshop", "illustrator", "xd", "figma", "sketch", "inkscape", "gimp", "blender", "unity", "unrealengine", "aftereffects"],
  ["chrome", "firefox", "safari", "opera", "androidstudio", "xcode", "eclipse"],
  ["wordpress", "drupal", "magento", "woocommerce", "ghost", "jekyll", "hugo", "gatsby", "nuxtjs", "nextjs", "eleventy"],
  ["jquery", "d3js", "threejs", "electron", "ionic", "xamarin", "flutter"],
  ["cplusplus", "c", "objectivec", "perl", "haskell", "r", "matlab", "fortran", "erlang", "clojure", "fsharp", "ocaml", "julia", "lua"],
  ["raspberrypi", "arduino"]
];

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundAnimation}>
        {[...devIconSets, ...devIconSets].map((iconSet, rowIndex) => (
          <div 
            key={rowIndex} 
            className={styles.iconRow} 
            style={{
              animationDuration: `${150 + rowIndex * 20}s`,
              animationDirection: rowIndex % 2 === 0 ? 'normal' : 'reverse'
            }}
          >
            {[...iconSet, ...iconSet, ...iconSet, ...iconSet, ...iconSet].map((icon, iconIndex) => (
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