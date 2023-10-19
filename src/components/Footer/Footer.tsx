import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>
      <p className={styles.para}>&copy; Copyright 2023 Programming with Mairaj. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;