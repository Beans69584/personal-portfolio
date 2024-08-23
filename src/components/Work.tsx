import type React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/Work.module.css';
import { v4 as uuidv4 } from 'uuid';

const projects = [
  {
    title: "Around Nippon",
    description: "A full-stack travel application designed to help users explore Japan. Built with a passion for Japanese culture and a desire to assist travelers.",
    techStack: [
      "devicon-nextjs-plain",
      "devicon-typescript-plain",
      "devicon-bun-plain",
      "devicon-postgresql-plain",
      "devicon-redis-plain",
      "devicon-sass-original",
      "devicon-google-plain"
    ],
    challenges: "Integrating google maps API, optimisations for mobile devices",
    image: "/images/around-nippon.png",
    liveDemo: "https://around-nippon.konpeki.co.uk",
    github: "https://github.com/Beans69584/around-nippon"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.JS and Framer Motion. Designed to showcase my skills and projects.",
    techStack: ["devicon-nextjs-plain", "devicon-typescript-plain", "devicon-bun-plain", "devicon-css3-plain"],
    challenges: "Designing a responsive layout, creating a method of updating content which is easy to use for myself",
    image: "/images/portfolio.png",
    liveDemo: "https://konpeki.co.uk",
    github: "https://github.com/Beans69584/personal-portfolio"
  }
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
              <div className={styles.techStack}>
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    <i className={tech}></i>
                  </span>
                ))}
              </div>
              <p><strong>Challenges:</strong> {project.challenges}</p>
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