import React from "react";
import styles from "../styles/earth.module.css";

const Earth = () => {
  return (
    <div className={styles.planetContainer}>
      <div className={styles.night}></div>
      <div className={styles.day}></div>
      <div className={styles.clouds}></div>
      <div className={styles.innerShadow}></div>
    </div>
  );
};

export default Earth;
