import React from "react";

export default function Perguntas(props) {
  return (
    <div>
      <p>{props.perguntas}</p>
      <input onChange={props.onChange} value={props.value} />
    </div>
  );
}

