import React from "react";
import styles from "./style.module.css";

const FooterBar = () => {
  return (
    <div className={styles.footer}>
      <a
        href="https://github.com/DulanaSenavirathna/typescript-select-component"
        title="Explore Repository "
        rel="noopener noreferrer"
      >
        Visit GitHub Repo{" "}
      </a>
      | 2023
    </div>
  );
};
export default FooterBar;
