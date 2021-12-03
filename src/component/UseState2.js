import { useState } from "react";

export default function UseState2() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState("");

  const onchangeHandler = (e) => {
    const inputValue = e.target.value;
    const updatedwarning = inputValue.includes(".js")
      ? "You need best skill to complit this task. Do you it"
      : null;
    setTodo(inputValue);
    setWarning(updatedwarning);
  };

  return (
    <div>
      <p>{todo || "Input Todo"}</p>
      <p>
        <textarea onChange={onchangeHandler} value={todo} name="todo" />
      </p>
      <h1>{warning || "Javascrip is best"}</h1>
    </div>
  );
}
