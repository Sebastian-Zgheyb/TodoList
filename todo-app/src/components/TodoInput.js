import { useState } from 'react';

const TodoInput = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (title && description) {
      onAddTodo(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="todo-input">
      <div className="todo-input-item">
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" />
      </div>
      <div className="todo-input-item">
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task description" />
      </div>
      <button type="button" onClick={handleAdd} className="primaryButton">Add</button>
    </div>
  );
};

export default TodoInput;
