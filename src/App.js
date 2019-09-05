import React from "react";

import TodoList from "./components/TodoComponents/TodoList";

import "./components/TodoComponents/Todo.css";

import AddTask from "./components/TodoComponents/TodoForm";

const TodoListInfo = [
  {
    name: "mow the yard",
    id: 123,
    completed: false
  },

  {
    name: "clean the house",
    id: 124,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: TodoListInfo
    };
  }

  completeTask = id => {
    this.setState({
      todo: this.state.todo.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  addTask = itemName => {
    const newTask = {
      name: itemName,
      id: Date.now(),
      complete: false
    };

    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };

  clearCompletedTasks = () => {
    this.setState({
      todo: this.state.todo.filter(task => !task.completed)
    });
  };

  render() {
    return (
      <>
        <h1>Your ToDo List</h1>
        <AddTask addTask={this.addTask} />
        <TodoList
          key={this.state.todo.id}
          todo={this.state.todo}
          completeTask={this.completeTask}
          clearCompletedTasks={this.clearCompletedTasks}
        />
      </>
    );
  }
}

export default App;
