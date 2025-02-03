import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineDelete } from "react-icons/ai";

const CompletedList = ({ todos, onDelete }) => {
  return (
    <div className="todo-list">
      <AnimatePresence>
        {todos.map((item, index) => (
          <motion.div
            key={index}
            className="todo-list-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>
                <small>Completed on: {item.completedOn}</small>
                <p><strong>Priority:</strong> {item.priority}</p>
              </p>
            </div>
            <AiOutlineDelete className="icon" onClick={() => onDelete(index)} title="Delete?" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CompletedList;
