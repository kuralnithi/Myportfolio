import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, sourceb, sourcef},
}) => {
  return (
    <div className={`${styles.container} pcard`}>
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={`${styles.image} pimg`}
      />
      <h3 className={`${styles.title} pcardtit`}>{title}</h3>
      <p className={`${styles.description} pcarddes`}>{description}</p>
     <div className="pskills"> <ul className={`${styles.skills} pcardskills`}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      </div>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="blank">
          Demo
        </a>
        <a href={sourcef} className={styles.link} target="blank">
          Source - client
        </a>
        <a href={sourceb} className={styles.link} target="blank">
          Source - server
        </a>
      </div>
    </div>
  );
};
