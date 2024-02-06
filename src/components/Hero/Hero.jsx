import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm kuralnithi </h1>
        <p className={styles.description}>
          I'm a Mern-stack developer
        </p>
        <a href="https://drive.google.com/file/d/1USHdVQgegG6M-zIp1JZoXvmTEUY83Vpa/view?usp=drive_link" target="blank" className={styles.contactBtn}>
          Download Resume
        </a>
      </div>
      <img
        src={"https://pushpesh.in/wp-content/uploads/2022/12/FB_IMG_1672069596556-transformed.png"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};