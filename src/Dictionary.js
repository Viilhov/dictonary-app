import "./Dictionary.css";
import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }
  function search(event) {
    event.preventDefault();

    let apiKey = "331711t40ba7f6a03e3o8bfc5f54faa4";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>What would you like to look up?</h1>
      <form className="dictionary-form" onSubmit={search}>
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
}
