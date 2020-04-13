import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ handleInput, search }) => {
  return (
    <section className={styles.searchboxSection}>
      <input
        type="text"
        placeholder="Search for a good movie..."
        className={styles.searchbox}
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
};

export default SearchBar;
