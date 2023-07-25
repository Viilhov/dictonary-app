import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <b>Definition:</b> {props.meaning.definition}
      </p>
      <p>
        <Example example={props.meaning.example} />
      </p>
      <p>
        {" "}
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
