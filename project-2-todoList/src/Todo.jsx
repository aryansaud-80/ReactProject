import "./Todo.css";
import { useState } from "react";

import TodoList from "./TodoList";
import TodoHead from "./TodoHead";
import { getItemLocalStorage, setItemLocalStorage } from "./LocalStorage";

function Todo() {
  const [todo, setTodo] = useState(() => getItemLocalStorage());

  const handleAddTodo = (value) => {
    const { id, content, checked } = value;
    if (!content) return;
    let isMatch = todo.find(
      (currTask) => currTask.content.toLowerCase() === content.toLowerCase()
    );
    if (isMatch) return;

    setTodo((prevTodo) => [...prevTodo, { id, content, checked }]);
  };

  const handleDeleteTodo = (value) => {
    const updateTodo = todo.filter((currEl) => currEl.content !== value);
    setTodo(updateTodo);
  };

  const handleChecked = (value) => {
    const updateTodo = todo.map((currTodo) => {
      if (currTodo.content === value) {
        return { ...currTodo, checked: !currTodo.checked };
      } else {
        return currTodo;
      }
    });

    setTodo(updateTodo);
  };

  setItemLocalStorage(todo);

  const handleEditButton = (index, newText) => {
    if (!newText.trim()) return;

    const isMatch = todo.some(
      (currTask, i) =>
        currTask.content.toLowerCase() === newText.toLowerCase() && i !== index
    );

    if (isMatch) return;

    const updatedTodo = todo.map((t, i) =>
      i === index ? { ...t, id: newText, content: newText } : t
    );

    setTodo(updatedTodo);
    setItemLocalStorage(updatedTodo);
  };

  return (
    <section className="container">
      <section className="header-container">
        <TodoHead onHandleAddTodo={handleAddTodo} />
      </section>

      <section className="todo">
        <ul>
          {todo.map((currTodo, index) => {
            return (
              <TodoList
                index={index}
                key={currTodo.id}
                data={currTodo.content}
                checked={currTodo.checked}
                onHandleChecked={handleChecked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleEditButton={handleEditButton}
              />
            );
          })}
        </ul>
      </section>
    </section>
  );
}

export default Todo;
