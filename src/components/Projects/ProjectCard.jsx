import React from "react";
import styles from "./ProjectCard.module.css";

// Import project images directly
import projectImg from "../../assets/projects/project.png";
import sandImg from "../../assets/projects/sandesh.png";
import dukanImg from "../../assets/projects/dukan.png";
import pitchImg from "../../assets/projects/pitch.png";

const imageMap = {
  "projects/project.png": projectImg,
  "projects/sandesh.png": sandImg,
  "projects/pitch.png": pitchImg,
  "projects/dukan.png": dukanImg,
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageMap[imageSrc]} // Use the imported image
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
