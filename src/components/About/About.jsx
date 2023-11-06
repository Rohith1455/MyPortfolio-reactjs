import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItemSkills}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Skills</h3>
              <p>
                <ul className={styles.ulSkills}>
                  <li className={styles.aboutList}>DotNet MVC</li>
                  <li className={styles.aboutList}>ASP .Net Web APIs</li>
                  <li className={styles.aboutList}>Javascript</li>
                  <li className={styles.aboutList}>React</li>
                  <li className={styles.aboutList}>C|C++|C# </li>
                  <li className={styles.aboutList}>Git</li>
                  <li className={styles.aboutList}>Bitbucket </li>
                  <li className={styles.aboutList}>Jira </li>
                  </ul>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
