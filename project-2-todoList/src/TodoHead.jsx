/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import DateTime from "./DateTime";
import { useState } from "react";

function TodoHead({ onHandleAddTodo }) {
  const [inputValue, setInputValue] = useState({});

  const handleSubmitButton = (event) => {
    event.preventDefault();
    onHandleAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };

  const handleChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };
  return (
    <>
      <h1 className="title">
        <FaEdit /> To Do
      </h1>
      <form className="addTodoForm" onSubmit={handleSubmitButton}>
        <input
          type="text"
          placeholder="Task..."
          value={inputValue.content}
          onChange={(event) => handleChange(event.target.value)}
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>

      <DateTime />
    </>
  );
}
export default TodoHead;
