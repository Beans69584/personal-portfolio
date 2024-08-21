import type React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/Work.module.css';
import { v4 as uuidv4 } from 'uuid';

const projects = [
  {
    title: "Around Nippon",
    description: "A full-stack travel application designed to help users explore Japan. Built with a passion for Japanese culture and a desire to assist travelers.",
    techStack: "Next.JS 14, Node.JS, PostgreSQL, Redis",
    challenges: "Integrating google maps API, optimisations for mobile devices",
    image: "/images/project1.png",
    liveDemo: "https://around-nippon.konpeki.co.uk",
    github: "https://github.com/Beans69584/around-nippon"
  },
];

const Work: React.FC = () => {
  return (
    <motion.section 
      id="work"
      className={styles.work}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Featured Projects</h2>
      <div className={styles.workShowcase}>
        {projects.map((project, index) => (
          <motion.div 
            key={uuidv4()}
            className={styles.workItem}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className={styles.workImage}>
              <Image 
                src={project.image} 
                alt={project.title} 
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.workContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className={styles.projectDetails}>
                <li><strong>Tech Stack:</strong> {project.techStack}</li>
                <li><strong>Challenges:</strong> {project.challenges}</li>
              </ul>
              <div className={styles.projectLinks}>
                <motion.a 
                  href={project.liveDemo} 
                  className={styles.workLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo <i className="fas fa-external-link-alt" />
                </motion.a>
                <motion.a 
                  href={project.github} 
                  className={styles.workLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub <i className="fab fa-github" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;