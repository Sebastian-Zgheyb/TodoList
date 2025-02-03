const ButtonGroup = ({ isCompleteScreen, setIsCompleteScreen }) => {
    return (
      <div className="button-area">
        <button
          className={`secondaryButton ${!isCompleteScreen && 'active'}`}
          onClick={() => setIsCompleteScreen(false)}
        >
          Todo
        </button>
        <button
          className={`secondaryButton ${isCompleteScreen && 'active'}`}
          onClick={() => setIsCompleteScreen(true)}
        >
          Completed
        </button>
      </div>
    );
  };
  
  export default ButtonGroup;
  