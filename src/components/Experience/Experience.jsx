import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";

// Import skill images
import htmlImg from "../../assets/skills/html.png";
import cssImg from "../../assets/skills/css.png";
import reactImg from "../../assets/skills/react.png";
import nodeImg from "../../assets/skills/node.png";
import mongodbImg from "../../assets/skills/mongodb.png";
import sqlImg from "../../assets/skills/mysql.png";
import gitImg from "../../assets/skills/gitt.png";
import expressImg from "../../assets/skills/expresss.png";
import javaImg from "../../assets/skills/javaa.png";
import jsImg from "../../assets/skills/jsss.png";

// Image mapping
const imageMap = {
  "skills/html.png": htmlImg,
  "skills/css.png": cssImg,
  "skills/react.png": reactImg,
  "skills/node.png": nodeImg,
  "skills/mongodb.png": mongodbImg,
  "skills/mysql.png": sqlImg,

  "skills/gitt.png": gitImg,
  "skills/expresss.png": expressImg,
  "skills/jsss.png": jsImg,
  "skills/javaa.png": javaImg,
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>SKILLS</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={imageMap[skill.imageSrc]} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
