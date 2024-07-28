/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaCheckCircle,
  FaRegCircle,
  FaRegEdit,
  FaTrashAlt,
} from "react-icons/fa";

function TodoList({
  index,
  data,
  checked,
  onHandleChecked,
  onHandleDeleteTodo,
  onHandleEditButton,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(data);

  const handleEditButton = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleSave = () => {
    onHandleEditButton(index, editValue); // Notify parent component of the change
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(data);
    setIsEditing(false);
  };

  return (
    <li className={checked ? "checked" : ""}>
      <button className="check" onClick={() => onHandleChecked(data)}>
        {checked ? <FaCheckCircle /> : <FaRegCircle />}
      </button>

      {isEditing ? (
        <form
          className="editTodoForm"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            value={editValue}
            onChange={handleChange}
            className="edit-input"
          />
          <button onClick={handleSave} className="edit-btn">
            Save
          </button>
          <button onClick={handleCancel} className="cancel-btn">
            Cancel
          </button>
        </form>
      ) : (
        <p>{data}</p>
      )}

      <button className="edit" onClick={handleEditButton}>
        <FaRegEdit />
      </button>
      <button className="delete" onClick={() => onHandleDeleteTodo(data)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

export default TodoList;
