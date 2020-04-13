import React from "react";
import styles from "./Movie.module.scss";

const Movie = ({ result, openPopup }) => {
  return (
    <div className={styles.result} onClick={() => openPopup(result.imdbID)}>
      <img src={result.Poster} alt={result.Title} />
      <h3>{result.Title}</h3>
    </div>
  );
};

export default Movie;
