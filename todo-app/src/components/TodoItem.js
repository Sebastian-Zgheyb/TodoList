import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

const TodoItem = ({ item, index, onDelete, onComplete, onEdit }) => {
  return (
    <div className="todo-list-item">
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p><strong>Priority:</strong> {item.priority}</p>
      </div>
      <div>
        <AiOutlineDelete className="icon" onClick={() => onDelete(index)} title="Delete?" />
        <BsCheckLg className="check-icon" onClick={() => onComplete(index)} title="Complete?" />
        <AiOutlineEdit className="check-icon" onClick={() => onEdit(index, item)} title="Edit?" />
      </div>
    </div>
  );
};

export default TodoItem;
