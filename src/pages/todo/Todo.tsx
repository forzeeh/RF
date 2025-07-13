import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addTodo, toggleTodo, deleteTodo, clearCompleted } from '../../store/todoSlice';
import './Todo.scss';

function Todo() {
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue.trim()));
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List</h2>
      
      <div className="todo-input-section">
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="todo-add-btn" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      <div className="todo-stats">
        <span>Total: {totalCount}</span>
        <span>Completed: {completedCount}</span>
        <span>Remaining: {totalCount - completedCount}</span>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span 
              className="todo-text"
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button 
              className="todo-delete-btn"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {completedCount > 0 && (
        <button 
          className="todo-clear-btn"
          onClick={() => dispatch(clearCompleted())}
        >
          Clear Completed ({completedCount})
        </button>
      )}
    </div>
  );
}

export default Todo;

