import { useState } from "react";

const TodoInput = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium"); // Default priority
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    const missingFields = [];
    
    if (!title) missingFields.push("Title");
    if (!description) missingFields.push("Description");
    if (!dueDate) missingFields.push("Due Date");

    if (missingFields.length > 0) {
      setError(`Missing: ${missingFields.join(", ")}`);
      return;
    }

    onAddTodo(title, description, priority, dueDate);
    
    // Reset fields and clear error message
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
    setError("");
  };

  return (
    <div className="todo-input">
      {error && <p style={{ color: "red", paddingRight: 10 }}>{error}</p>}

      <div className="todo-input-item">
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" />
      </div>

      <div className="todo-input-item">
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task description" />
      </div>

      <div className="todo-input-item">
        <label>Priority</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="todo-input-item">
        <label>Due Date</label>
        <input type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </div>

      <button type="button" onClick={handleAdd} className="primaryButton">Add</button>
    </div>
  );
};

export default TodoInput;
