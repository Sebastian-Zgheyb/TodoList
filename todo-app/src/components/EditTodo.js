import { useState } from 'react';

const EditTodo = ({ item, onUpdate }) => {
    const [updatedItem, setUpdatedItem] = useState(item);
  
    return (
      <div className="edit__wrapper">
        <input value={updatedItem.title} onChange={(e) => setUpdatedItem({ ...updatedItem, title: e.target.value })} />
        <textarea value={updatedItem.description} rows={4} onChange={(e) => setUpdatedItem({ ...updatedItem, description: e.target.value })} />
        <button type="button" onClick={() => onUpdate(updatedItem)} className="primaryButton">Update</button>
      </div>
    );
  };
  
  export default EditTodo;
  