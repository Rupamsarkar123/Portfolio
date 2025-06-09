import React from "react";
import styles from "./Hero.module.css";

// Import Hero Image
import heroImage from "../../assets/hero/heroImage.jpg";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rupam Sarkar</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience.
          I'm currently a final year B.Tech student in ECE and
          learning Java (DSA). I aim to build innovative solutions while
          continuously growing as a developer and problem-solver.
        </p>

        {/* Contact & Download CV Buttons */}
        <div className={styles.buttonGroup}>
          <a href="mailto:srupam322@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>

          <a
            href="https://drive.google.com/file/d/1pHnqS80duubChV9oQWWn4_-k6UDyz5C5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtn}
          >
            Download CV
          </a>
        </div>
      </div>

      <img src={heroImage} alt="Hero image of me" className={styles.heroImg} />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
