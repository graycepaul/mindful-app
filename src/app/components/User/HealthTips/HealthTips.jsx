import React from "react";
import styles from "./healthTip.module.css";
import { UserNav } from "../UserNav";

export const HealthTip = () => {
  return (
    <div>
      <UserNav />
      <div className={styles.container}>
        <p className={styles.text}>Coming soon...</p>
      </div>
    </div>
  );
};
