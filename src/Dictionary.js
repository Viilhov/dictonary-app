import "./Dictionary.css";
import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function Search() {
    let apiKey = "331711t40ba7f6a03e3o8bfc5f54faa4";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    Search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>What would you like to look up?</h1>
        <form className="dictionary-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a word"
            className="shadow"
            onChange={handleKeyword}
          />
        </form>{" "}
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
