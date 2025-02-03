import { AiOutlineDelete } from 'react-icons/ai';

const CompletedList = ({ todos, onDelete }) => {
  return todos.map((item, index) => (
    <div className="todo-list-item" key={index}>
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p><small>Completed on: {item.completedOn}</small></p>
      </div>
      <AiOutlineDelete className="icon" onClick={() => onDelete(index)} title="Delete?" />
    </div>
  ));
};

export default CompletedList;
