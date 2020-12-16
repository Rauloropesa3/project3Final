import React from "react";

import styles from "./TopNav.module.css";

export function TopNav() {
  return (
    <div className={styles.right}>
      <span className={styles["nav-link"]}>Login</span>
      <button className={`button ${styles["signup-btn"]}`}>Sign Up</button>
    </div>
  );
}
