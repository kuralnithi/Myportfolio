  import React, { useRef, useState } from "react";

  import styles from "./Projects.module.css";

  import projects from "../../data/projects.json";
  import { ProjectCard } from "./ProjectCard";

  export const Projects = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const projectsContainerRef = useRef(null);

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - projectsContainerRef.current.offsetLeft);
      setScrollLeft(projectsContainerRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - projectsContainerRef.current.offsetLeft;
      const walk = (x - startX) * 3; // Adjust sensitivity as needed
      projectsContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };
    return (
      <section className={styles.container} id="projects ">
        <h2 className={styles.title}>Projects</h2>
        <div className={`${styles.projects} pbox`}
          ref={projectsContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
      </section>
    );
  };
