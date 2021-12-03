import { useState } from "react";

function UseStete() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState("");

  const onchangeHandler = (e) => {
    const inputValue = e.target.value;
    const updatedwarning = inputValue.includes(".js")
      ? "You skill Javascript to complit this task, do you it?"
      : null;

    setTodo(inputValue);
    setWarning(updatedwarning);
  };

  return (
    <div>
      <p>{todo || "Input Todo"}</p>
      <p>
        <textarea name="todo" onChange={onchangeHandler} value={todo} />
      </p>
      <hr />
      <a>{warning || "Good choice!"}</a>
    </div>
  );
}

export default UseStete;
