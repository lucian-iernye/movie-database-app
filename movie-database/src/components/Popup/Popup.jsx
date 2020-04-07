import React from "react";
import styles from "./Popup.module.scss";

const Popup = ({ selected, closePopup }) => {
  return (
    <section className={styles.popup}>
      <div className={styles.content}>
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>
        <p className={styles.rating}>Rating: {selected.imdbRating}</p>
        <div className={styles.plot}>
          <img src={selected.Poster} alt={selected.Title} />
          <p>Description: {selected.Plot}</p>
          <button className={styles.close} onClick={closePopup}>
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default Popup;
