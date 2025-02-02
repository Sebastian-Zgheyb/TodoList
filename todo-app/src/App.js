import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className='todo-wrapper'>
        <div className='todo-input'>
            <div className='todo-input-item'>
              <label>Title</label>
              <input type="text" placeholder="What's the task title?"></input>
            </div>
            <div className='todo-input-item'>
              <label>Description</label>
              <input type="text" placeholder="What's the task description?"></input>
            </div>
            <div className='todo-input-item'>
              <button type='button' className='primaryButton'>Add</button>
            </div>
        </div>
        <div class='button-area'>
          <button>Todo</button>
          <button>Completed</button>
        </div>
        <div className='todo-list'>
          <div className='todo-list-item'>
            <h3>Task 1</h3>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
