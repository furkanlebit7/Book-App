import React, { useState } from "react";
import styles from "./Loading.module.css";
const Loading = () => {
  const [page] = useState(18);
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  scale-10 ">
      <div className={styles.book}>
        <div className={styles.inner}>
          <div className={styles.left}></div>
          <div className={styles.middle}></div>
          <div className={styles.right}></div>
        </div>
        <ul>
          {[...Array(page)].map((p, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Loading;
