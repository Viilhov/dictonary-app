import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div calssName="Dictionary">
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
