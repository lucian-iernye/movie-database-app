import React from "react";
import styles from "./Movies.module.scss";
import Movie from "../Movie";

const Movies = ({ results, openPopup }) => {
  return (
    <>
      <section className={styles.results}>
        {results.map((result) => (
          <Movie key={result.imdbID} result={result} openPopup={openPopup} />
        ))}
      </section>
    </>
  );
};

export default Movies;
