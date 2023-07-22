import "./Dictionary.css";
import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
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
      <p>What would you like to look up?</p>
      <form className="dictionaryForm" onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word"
          onChange={handleKeyword}
        />
      </form>{" "}
    </div>
  );
}
