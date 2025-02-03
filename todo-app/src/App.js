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
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem('todolist'));
    const savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
    if (savedTodo) setTodos(savedTodo);
    if (savedCompletedTodo) setCompletedTodos(savedCompletedTodo);
  }, []);

  const handleAddTodo = (title, description, priority) => {
    const newTodoItem = { title, description, priority };
    const updatedTodos = [...allTodos, newTodoItem];
    setTodos(updatedTodos);
    localStorage.setItem('todolist', JSON.stringify(updatedTodos));
  };

  const handleDeleteTodo = (index) => {
    const originalIndex = allTodos.findIndex(todo => todo === filteredTodos[index]);
    if (originalIndex === -1) return; // Safety check
  
    const updatedTodos = [...allTodos];
    updatedTodos.splice(originalIndex, 1);
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
    const originalIndex = allTodos.findIndex(todo => todo === filteredTodos[index]);
    if (originalIndex === -1) return;
  
    setCurrentEdit(originalIndex);
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
    const originalIndex = allTodos.findIndex(todo => todo === filteredTodos[index]);
    if (originalIndex === -1) return;
  
    const now = new Date();
    const completedOn = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const completedItem = { ...allTodos[originalIndex], completedOn };
  
    const updatedTodos = allTodos.filter((_, i) => i !== originalIndex);
    
    setCompletedTodos([...completedTodos, completedItem]);
    setTodos(updatedTodos);
  
    localStorage.setItem('todolist', JSON.stringify(updatedTodos));
    localStorage.setItem('completedTodos', JSON.stringify([...completedTodos, completedItem]));
  };
  
  

  const filteredTodos = allTodos
    .filter(todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      const priorityOrder = { Low: 1, Medium: 2, High: 3 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

  const filteredCompletedTodos = completedTodos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>My Todos</h1>
      <ThemeToggle /> 
      <div className="todo-wrapper">
        <TodoInput onAddTodo={handleAddTodo} />
        <input 
          type="text" 
          placeholder="Search todos..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="search-bar"
        />
        <ButtonGroup isCompleteScreen={isCompleteScreen} setIsCompleteScreen={setIsCompleteScreen} />
        <div className="todo-list">
          {!isCompleteScreen ? (
            <TodoList
              todos={filteredTodos}
              onDelete={handleDeleteTodo}
              onComplete={handleComplete}
              onEdit={handleEdit}
              currentEdit={currentEdit}
              currentEditedItem={currentEditedItem}
              onUpdateTodo={handleUpdateTodo}
            />
          ) : (
            <CompletedList todos={filteredCompletedTodos} onDelete={handleDeleteCompletedTodo} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
