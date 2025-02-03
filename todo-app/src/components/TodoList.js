import TodoItem from './TodoItem';
import EditTodo from './EditTodo';

const TodoList = ({ todos, onDelete, onComplete, onEdit, currentEdit, currentEditedItem, onUpdateTodo }) => {
  return todos.map((item, index) => (
    currentEdit === index ? (
      <EditTodo key={index} item={currentEditedItem} onUpdate={onUpdateTodo} />
    ) : (
      <TodoItem key={index} item={item} index={index} onDelete={onDelete} onComplete={onComplete} onEdit={onEdit} />
    )
  ));
};

export default TodoList;
