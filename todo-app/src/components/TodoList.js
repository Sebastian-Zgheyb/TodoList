import { motion, AnimatePresence } from "framer-motion";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

const TodoList = ({ todos, onDelete, onComplete, onEdit, currentEdit, currentEditedItem, onUpdateTodo }) => {
  return (
    <div className="todo-list">
      <AnimatePresence>
        {todos.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15
            }}
          >
            {currentEdit === index ? (
              <EditTodo item={currentEditedItem} onUpdate={onUpdateTodo} />
            ) : (
              <TodoItem item={item} index={index} onDelete={onDelete} onComplete={onComplete} onEdit={onEdit} />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;
