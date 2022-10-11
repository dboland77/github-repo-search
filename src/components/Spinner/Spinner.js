import React from "react";
import styles from "./spinner.module.css";

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.preloader}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
};
