import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <span>
        <b>Definition:</b> {props.meaning.definition}
      </span>
      <span>
        <Example example={props.meaning.example} />
      </span>
      <span>
        {" "}
        <Synonyms synonyms={props.meaning.synonyms} />
      </span>
    </div>
  );
}
