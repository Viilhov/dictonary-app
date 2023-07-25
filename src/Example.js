import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div>
        <b>Example:</b>
        <span> {props.example}</span>
      </div>
    );
  } else {
    return null;
  }
}
