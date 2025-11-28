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
          I'm a full-stack developer and a final-year B.Tech (ECE) student.
          I’ve built real-world web applications using modern frontend and backend tools.
          I have a solid understanding of Data Structures & Algorithms and enjoy solving problems,
          designing clean user interfaces, and building scalable systems that make a real impact.
        </p>

        {/* Contact & Download CV Buttons */}
        <div className={styles.buttonGroup}>
          <a href="mailto:srupam322@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>

          <a
            href="https://drive.google.com/file/d/1nL2Sodp3r4LU8FzqQkEdohJQr316YQ8o/view?usp=sharing"
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


