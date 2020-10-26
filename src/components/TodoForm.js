import React from "react";

export default function TodoForm(props) {
  const { change, add, value } = props;

  return (
    <div>
      <input type="text" value={value} onChange={change} />
      <button onClick={add}>Add Todo</button>
      <button>Clear Completed</button>
    </div>
  );
}
