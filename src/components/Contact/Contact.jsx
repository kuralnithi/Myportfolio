import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className="iconimg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzzGqfrah7TlqJviJmqH4b7Qdbugqfo2aZI-D6OCGDg&s"} alt="Email icon" />
          <a href="mailto:kuralnithi1999@gmail.com">kuralnithi1999@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img className="iconimg"
            src={"https://cdn-icons-png.flaticon.com/256/174/174857.png"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/kural-nithi-0b967122b" target="blank">linkedin.com/kuralnithi</a>
        </li>
        <li className={styles.link}>
          <img className="iconimg" src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"} alt="Github icon" />
          <a href="https://www.github.com/kuralnithi" target="blank">github.com/kuralnithi</a>
        </li>
      </ul>
    </footer>
  );
};
