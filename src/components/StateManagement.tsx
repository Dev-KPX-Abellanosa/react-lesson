import React, { useState, useEffect } from 'react';

const StateManagement = () => {
  // Basic State
  const [count, setCount] = useState(0);
  
  // Object State
  const [user, setUser] = useState({
    name: '',
    age: 0,
    isActive: true
  });

  // Array State
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  // Effect with State
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Update Object State
  const updateUser = (field: string, value: string | number | boolean) => {
    setUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Update Array State
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos(prev => [...prev, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div className="state-management">
      <h1>State Management in React</h1>

      <section>
        <h2>Basic State</h2>
        <div className="counter">
          <p>Count: {count}</p>
          <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
          <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
        </div>
      </section>

      <section>
        <h2>Object State</h2>
        <div className="user-form">
          <input
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => updateUser('name', e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            value={user.age}
            onChange={(e) => updateUser('age', parseInt(e.target.value) || 0)}
          />
          <label>
            <input
              type="checkbox"
              checked={user.isActive}
              onChange={(e) => updateUser('isActive', e.target.checked)}
            />
            Active
          </label>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      </section>

      <section>
        <h2>Array State</h2>
        <div className="todo-list">
          <div className="todo-input">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add new todo"
            />
            <button onClick={addTodo}>Add</button>
          </div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2>Effect with State</h2>
        <p>Check the page title - it updates with the count!</p>
      </section>
    </div>
  );
};

export default StateManagement; 