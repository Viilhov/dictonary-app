import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>Definition: {props.meaning.definition}</p>
      <p>Example: {props.meaning.example}</p>
      <p>
        {" "}
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
