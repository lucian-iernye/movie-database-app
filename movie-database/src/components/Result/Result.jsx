import React from "react";
import styles from "./Result.module.scss";

const Result = ({ result, openPopup }) => {
  return (
    <div className={styles.result} onClick={() => openPopup(result.imdbID)}>
      <img src={result.Poster} alt={result.Title} />
      <h3>{result.Title}</h3>
    </div>
  );
};

export default Result;
