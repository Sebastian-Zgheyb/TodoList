import { useEffect, useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import CompletedList from './components/CompletedList';
import ButtonGroup from './components/ButtonGroup';
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState(null);
  const [currentEditedItem, setCurrentEditedItem] = useState(null);

  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem('todolist'));
    const savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
    if (savedTodo) setTodos(savedTodo);
    if (savedCompletedTodo) setCompletedTodos(savedCompletedTodo);
  }, []);

  const handleAddTodo = (title, description) => {
    const newTodoItem = { title, description };
    const updatedTodos = [...allTodos, newTodoItem];
    setTodos(updatedTodos);
    localStorage.setItem('todolist', JSON.stringify(updatedTodos));
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...allTodos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    localStorage.setItem('todolist', JSON.stringify(updatedTodos));
  };

  const handleDeleteCompletedTodo = (index) => {
    const updatedCompletedTodos = [...completedTodos];
    updatedCompletedTodos.splice(index, 1);
    setCompletedTodos(updatedCompletedTodos);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedTodos));
  };

  const handleEdit = (index, item) => {
    setCurrentEdit(index);
    setCurrentEditedItem(item);
  };

  const handleUpdateTodo = (updatedItem) => {
    const updatedTodos = [...allTodos];
    updatedTodos[currentEdit] = updatedItem;
    setTodos(updatedTodos);
    setCurrentEdit(null);
    setCurrentEditedItem(null);
    localStorage.setItem('todolist', JSON.stringify(updatedTodos));
  };

  const handleComplete = (index) => {
    const now = new Date();
    const completedOn = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const completedItem = { ...allTodos[index], completedOn };
    
    setCompletedTodos([...completedTodos, completedItem]);
    handleDeleteTodo(index);
    localStorage.setItem('completedTodos', JSON.stringify([...completedTodos, completedItem]));
  };

  return (
    <div className="App">
      <h1>My Todos</h1>
      <ThemeToggle /> 
      <div className="todo-wrapper">
        <TodoInput onAddTodo={handleAddTodo} />
        <ButtonGroup isCompleteScreen={isCompleteScreen} setIsCompleteScreen={setIsCompleteScreen} />
        <div className="todo-list">
          {!isCompleteScreen ? (
            <TodoList
              todos={allTodos}
              onDelete={handleDeleteTodo}
              onComplete={handleComplete}
              onEdit={handleEdit}
              currentEdit={currentEdit}
              currentEditedItem={currentEditedItem}
              onUpdateTodo={handleUpdateTodo}
            />
          ) : (
            <CompletedList todos={completedTodos} onDelete={handleDeleteCompletedTodo} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
