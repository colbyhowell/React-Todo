import React from "react";

import TodoItem from "../TodoComponents/Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
  console.log(props);
  return (
    <div className="todo-list-style">
      {props.todo.map(todoItem => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          completeTask={props.completeTask}
        />
      ))}
      <button onClick={props.clearCompletedTasks}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
