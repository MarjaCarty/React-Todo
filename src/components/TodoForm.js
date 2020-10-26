import React from "react";
import "./TodoForm.css";

export default function TodoForm(props) {
  const { change, add, value, clear } = props;

  return (
    <div>
      <input type="text" value={value} onChange={change} />
      <button onClick={add}>Add Todo</button>
      <button onClick={clear}>Clear Completed</button>
    </div>
  );
}
