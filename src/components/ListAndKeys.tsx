import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const ListAndKeys = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy to production', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  // Add new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      const newId = Math.max(...todos.map(todo => todo.id), 0) + 1;
      setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  // Toggle todo completion
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Remove todo
  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="list-and-keys">
      <h1>Lists and Keys in React</h1>

      <section>
        <h2>Todo List Example</h2>
        <div className="todo-input">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new todo"
          />
          <button onClick={addTodo}>Add Todo</button>
        </div>

        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span>{todo.text}</span>
              <button onClick={() => removeTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Key Points About Keys</h2>
        <div className="key-points">
          <ul>
            <li>Keys help React identify which items have changed</li>
            <li>Keys should be unique among siblings</li>
            <li>Don't use array index as key if items can reorder</li>
            <li>Keys should be stable and predictable</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Nested Lists Example</h2>
        <div className="nested-lists">
          {todos.map(todo => (
            <div key={todo.id} className="todo-card">
              <h3>{todo.text}</h3>
              <ul>
                <li>ID: {todo.id}</li>
                <li>Status: {todo.completed ? 'Completed' : 'Pending'}</li>
                <li>Actions:
                  <ul>
                    <li>
                      <button onClick={() => toggleTodo(todo.id)}>
                        {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
                      </button>
                    </li>
                    <li>
                      <button onClick={() => removeTodo(todo.id)}>Delete</button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ListAndKeys; 