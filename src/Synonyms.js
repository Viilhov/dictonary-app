import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Synonym:</strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              <span className="synonym">{synonym}</span>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
