import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <section className="shadow">
          <h2>{props.results.word}</h2>
          <p>{props.results.phonetic}</p>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section className="shadow" key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
