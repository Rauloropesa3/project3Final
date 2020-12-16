import React from "react";
// import logo from "../assets/Outtaline.png";
import styles from "./NavBar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
// import { Link } from "react-router-dom";

export function NavBar(props) {
  return (
    <div className={styles["nav-bar"]}>
      <span className={styles["logo"]}>OuttaLine</span>
      <SearchBar
        small
        term={props.term}
        location={props.location}
        search={props.search}
      />
      <div className={styles.filters}>
        <button className={styles["filterBtn"]}>
          <span className="icon">
            <i className="fas fa-sliders-h"></i>
          </span>
          <span>All Filters</span>
        </button>
        <button className={styles["openNowBtn"]}>
          <span className="icon">
            <i className="fas fa-clock"></i>
          </span>
          <span>Open Now</span>
        </button>
      </div>
      {/* <button className={`button ${styles["nav-button"]}`}>Sign In</button>
      <button className={`button ${styles["nav-button"]}`}>Register</button> */}
    </div>
  );
}
