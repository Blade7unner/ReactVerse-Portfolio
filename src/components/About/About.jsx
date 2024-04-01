import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.gif")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer:</h3>
              <p>
                I'm a frontend developer with hands-on experience in building responsive and optimized websites. Proficient in HTML, CSS, JavaScript, and frameworks like React.js.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer:</h3>
              <p>
                I have experience developing fast and optimized backend systems and APIs using technologies like Node.js, Express, and databases such as MongoDB or SQL.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
