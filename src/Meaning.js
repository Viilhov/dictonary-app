import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition:</strong> {props.meaning.definition}
      </p>
      <p>
        <strong>Example:</strong> {props.meaning.example}
      </p>
      <p>
        {" "}
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
