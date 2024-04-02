import React from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        PORTFOLIO
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={getImageUrl("nav/menuIcon.png")}
          alt="menu-button"
        />
        <img
          className={`${styles.closeIcon} ${styles.menuBtn}`}
          src={getImageUrl("nav/closeIcon.png")}
          alt="close-button"
        />
        <ul className={styles.menuItems}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
