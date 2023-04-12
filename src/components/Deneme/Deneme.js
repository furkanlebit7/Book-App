import React from "react";

import styles from "./Deneme.module.css";
import { Link } from "react-router-dom";

const Deneme = ({ book }) => {
  return (
    <div class={styles.container}>
      <div class={styles.deck}>
        <div class={`${styles.card} ${styles.hovercard}`}>
          <div class={`${styles.front} ${styles.face}`}>
            <Link>
              <li className="rounded border-tBrown border-2 p-3 h-full flex flex-col justify-between items-center drop-shadow-2xl hover:bg-tBrownLight hover:border-tRed">
                <img
                  className="border-4 border-tRed my-3 h-44"
                  alt="Book Cover"
                  src={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : require("../../assets/images/not.png")
                  }
                />
                <h1 className="font-bold text-center">
                  {book.volumeInfo.title.slice(0, 50)}
                  {book.volumeInfo.title.length > 50 ? "..." : ""}
                </h1>
              </li>
            </Link>
          </div>

          <div class={`${styles.back} ${styles.face}`}>
            <h2>Basic</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deneme;
