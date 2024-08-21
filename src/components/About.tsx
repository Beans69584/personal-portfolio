import type React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5 / CSS3", icon: "devicon-html5-plain colored", level: 100 },
      { name: "JavaScript / TypeScript", icon: "devicon-javascript-plain colored", level: 85 },
      { name: "Next.js / React", icon: "devicon-nextjs-plain colored", level: 75 },
      { name: "Sass / SCSS", icon: "devicon-sass-original colored", level: 90 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "ASP.NET Core", icon: "devicon-dotnetcore-plain colored", level: 75 },
      { name: "C#", icon: "devicon-csharp-plain colored", level: 90 },
      { name: "Node.js", icon: "devicon-nodejs-plain colored", level: 80 },
      { name: "Python", icon: "devicon-python-plain", level: 95 },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", level: 55 },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: 70 },
      { name: "Redis", icon: "devicon-redis-plain colored", level: 80 },
      { name: "MySQL", icon: "devicon-mysql-plain colored", level: 50 },
    ]
  },
  {
    title: "Tools & Methods",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored", level: 85 },
      { name: "Docker", icon: "devicon-docker-plain colored", level: 50 },
      { name: "VS Code", icon: "devicon-vscode-plain colored", level: 100 },
      { name: "Visual Studio", icon: "devicon-visualstudio-plain colored", level: 90 },
    ]
  }
];

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>About Me</h2>
      <p>I'm a full-stack developer who's dedicated to making all my works as accessible for all users as possible. From handling obscure edge cases to ensuring the smoothest of user experiences, I'm always looking to improve my skills and learn new technologies.</p>

      <div className={styles.skillsBreakdown}>
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className={styles.skillCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <i className={skill.icon} />
                  <span className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>
                      <motion.span
                        className={styles.skillLevelIndicator}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                      />
                    </span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;