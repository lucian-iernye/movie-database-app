import React, { useState } from "react";
import axios from "axios";

import "./App.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import Movies from "./components/Movies";
import Popup from "./components/Popup";

function App() {
  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {},
  });

  const search = (event) => {
    if (event.key === "Enter") {
      axios(`http://www.omdbapi.com/?&apikey=40062257&s=${state.search}`).then(
        ({ data }) => {
          let result = data.Search;

          setState((prevState) => {
            return { ...prevState, results: result };
          });
        }
      );
    } else if (event.target.value === "") {
      return null;
    }
  };

  const handleInput = (event) => {
    let search = event.target.value;
    setState((prevState) => {
      return { ...prevState, search: search };
    });
    console.log(state.search);
  };

  const openPopup = (id) => {
    axios(`http://www.omdbapi.com/?&apikey=40062257&i=${id}`)
      .then(({ data }) => {
        let result = data;

        setState((prevState) => {
          return { ...prevState, selected: result };
        });
      })
      .catch((err) => console.log(err));
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie database 2020. Made with passion by a _Nologist ...</h1>
        <h2>Please search any movie by typing the name and press enter</h2>
      </header>
      <main>
        <SearchBar handleInput={handleInput} search={search} />
        <Movies results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title !== "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
