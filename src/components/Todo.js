import React from "react";
import "./Todo.css";

export default function Todo(props) {
  const { todo, handleToggle } = props;

  return (
    <div>
      <p
        onClick={() => handleToggle(todo.id)}
        className={todo.completed ? "finished" : ""}
      >
        {todo.task}
      </p>
    </div>
  );
}
