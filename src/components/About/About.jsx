import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src="https://img.freepik.com/free-vector/cartoon-working-day-scene-illustration_52683-62609.jpg?w=740&t=st=1707220523~exp=1707221123~hmac=04eac72b30f0d596b6975939f73b572de7a90d28999a16cb88e12c4d4a295907"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              As a Web developent enthusiast, I'm driven by a passion for crafting robust and dynamic web applications. My fresh perspective, combined with a dedication to continuous learning, fuels my ambition to create seamless user experiences and contribute effectively to innovative projects in the ever-evolving tech landscape
              </p>
            </div>
          </li>
        
        </ul>
      </div>
    </section>
  );
};
