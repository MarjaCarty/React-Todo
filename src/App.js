import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

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

  handleAdd = (e) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { task: this.state.input, id: Date.now(), completed: false },
      ],
      input: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm
          change={this.handleInputChange}
          value={this.state.input}
          add={this.handleAdd}
        />
      </div>
    );
  }
}

export default App;
