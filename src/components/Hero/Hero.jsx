import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Felipe Benoit</h1>
        <p className={styles.description}>
          I'm a full-stack web developer student with hands-on experience in frontend technologies like HTML, CSS, and JavaScript. I also have proficiency in backend technologies such as Node.js, Express, and databases like MongoDB and SQL.
          <br/><br/>
          I’m interested in exploring new technologies, cybersecurity, and AI.
          <br/><br/>
          Feel free to reach out if you'd like to learn more!
        </p>
        <a href="mailto:fbenoit2077@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.gif")}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
