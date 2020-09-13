import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h3>
        {" "}
        <Link to="/">Logo</Link>{" "}
      </h3>
      <ul className={styles.navLinks}>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/survey">
          <li>Survey</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
