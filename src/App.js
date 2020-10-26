import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      input: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleAdd = () => {
    if (this.state.input) {
      this.setState({
        todos: [
          ...this.state.todos,
          { task: this.state.input, id: Date.now(), completed: false },
        ],
        input: "",
      });
    }
  };

  handleToggle = (itemId) => {
    this.setState(
      this.state.todos.filter((todo) => {
        if (todo.id === itemId) {
          todo.completed = !todo.completed;
        }
      })
    );
  };

  handleClear = (e) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return !todo.completed;
      }),
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} handleToggle={this.handleToggle} />
        <TodoForm
          change={this.handleInputChange}
          value={this.state.input}
          add={this.handleAdd}
          clear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
