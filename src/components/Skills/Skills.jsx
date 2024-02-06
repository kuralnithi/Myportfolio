import React from 'react'
import skills from "../../data/skills.json";
import styles from "../Experience/Experience.module.css";
import { getImageUrl } from "../../utils";

export default function Skills() {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.content}>

           <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img className="scss" src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        </div>
    </section>
  )
}
