import React, { Component } from "react";

class TodoClass extends Component {
  state = {
    todo: "",
    warning: null,
  };

  onchangeHandler = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes(".js")
      ? "You skill Javascript to complit this task, do you it?"
      : null;

    this.setState({
      todo: inputValue,
      warning,
    });
  };

  render() {
    const { todo, warning } = this.state;
    return (
      <div>
        <p>{todo || "Input Todo"}</p>
        <p>
          <textarea name="todo" onChange={this.onchangeHandler} value={todo} />
        </p>
        <hr />
        <a>{warning || "Good choice!"}</a>
      </div>
    );
  }
}

export default TodoClass;
