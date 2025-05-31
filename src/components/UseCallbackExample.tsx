import React, { useState, useCallback } from 'react';

// Child component that receives a callback prop
const Button = ({ onClick, label }: { onClick: () => void; label: string }) => {
  console.log(`Button "${label}" rendered`);
  return (
    <button onClick={onClick} className="memo-button">
      {label}
    </button>
  );
};

// Optimized child component using React.memo
const MemoizedButton = React.memo(Button);

const UseCallbackExample = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Example 1: Basic useCallback
  const handleIncrement1 = useCallback(() => {
    setCount1(c => c + 1);
  }, []); // Empty dependency array as it doesn't depend on any values

  // Example 2: useCallback with dependencies
  const handleIncrement2 = useCallback(() => {
    setCount2(c => c + 1);
  }, []); // Empty dependency array as it doesn't depend on any values

  // Example 3: Callback that depends on state
  const handleReset = useCallback(() => {
    setCount1(0);
    setCount2(0);
  }, []); // Empty dependency array as it uses functional updates

  // Example 4: Callback that creates a new function (without useCallback)
  const handleAlert = () => {
    alert(`Count 1: ${count1}, Count 2: ${count2}`);
  };

  return (
    <div className="component-container">
      <h2>useCallback Examples</h2>

      <div className="example-section">
        <h3>Example 1: Basic useCallback</h3>
        <p>Count 1: {count1}</p>
        <MemoizedButton onClick={handleIncrement1} label="Increment Count 1" />
        <p>This button uses a memoized callback that doesn't change between renders.</p>
      </div>

      <div className="example-section">
        <h3>Example 2: Another useCallback</h3>
        <p>Count 2: {count2}</p>
        <MemoizedButton onClick={handleIncrement2} label="Increment Count 2" />
        <p>This button also uses a memoized callback, demonstrating multiple callbacks.</p>
      </div>

      <div className="example-section">
        <h3>Example 3: Callback with Multiple State Updates</h3>
        <MemoizedButton onClick={handleReset} label="Reset Both Counts" />
        <p>This callback resets both counters using functional updates.</p>
      </div>

      <div className="example-section">
        <h3>Example 4: Regular Function (without useCallback)</h3>
        <button onClick={handleAlert} className="regular-button">
          Show Counts
        </button>
        <p>This button uses a regular function that's recreated on every render.</p>
        <p>Notice how the regular button doesn't need memoization because:</p>
        <ul>
          <li>It's not passed to a memoized component</li>
          <li>It's not used as a dependency in other hooks</li>
          <li>The function recreation is not expensive</li>
        </ul>
      </div>

      <div className="example-section">
        <h3>When to use useCallback:</h3>
        <ul>
          <li>When passing callbacks to optimized child components (React.memo)</li>
          <li>When the callback is used as a dependency in other hooks</li>
          <li>When the callback is used in event handlers that need to maintain the same reference</li>
          <li>When the callback is passed to a component that implements shouldComponentUpdate</li>
        </ul>

        <h3>When NOT to use useCallback:</h3>
        <ul>
          <li>When the callback is not passed to any child components</li>
          <li>When the component doesn't re-render frequently</li>
          <li>When the function is simple and doesn't cause performance issues</li>
          <li>When the overhead of memoization is greater than the benefit</li>
        </ul>
      </div>
    </div>
  );
};

export default UseCallbackExample; 