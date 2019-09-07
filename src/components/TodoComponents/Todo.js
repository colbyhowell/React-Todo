import React from "react";

const TodoItem = props => {
  return (
    <div
      className={`task${props.todoItem.completed ? " completed" : ""}`}
      onClick={() => props.completeTask(props.todoItem.id)}
    >
      {props.todoItem.name}
    </div>
  );
};

export default TodoItem;
