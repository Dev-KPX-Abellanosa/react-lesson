import { useState, useMemo, useCallback } from 'react';

const UseMemoAndCallback = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0);

  // Example 1: useMemo for expensive calculations
  // Without useMemo, this calculation would run on every render
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }, [numbers]); // Only recalculate when numbers array changes

  // Example 2: useMemo for filtering
  // Without useMemo, this filtering would run on every render
  const filteredNumbers = useMemo(() => {
    console.log('Filtering numbers...');
    return numbers.filter(num => 
      num.toString().includes(searchTerm)
    );
  }, [numbers, searchTerm]); // Only refilter when numbers or searchTerm changes

  // Example 3: useCallback for event handlers
  // Without useCallback, this function would be recreated on every render
  const handleAddNumber = useCallback(() => {
    setNumbers(prev => [...prev, Math.floor(Math.random() * 100)]);
  }, []); // Empty dependency array as it doesn't depend on any values

  // Example 4: useCallback for complex operations
  const handleSearch = useCallback((value: string) => {
    setSearchTerm(value);
  }, []); // Empty dependency array as it doesn't depend on any values

  // Example 5: useCallback for child component props
  const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty dependency array as it doesn't depend on any values


  const simpleCalculation = () => {
    return count * 2; // Simple calculation that doesn't need memoization
  };

  return (
    <div className="component-container">
      <h2>useMemo and useCallback Examples</h2>

      <div className="example-section">
        <h3>Example 1: useMemo for Expensive Calculations</h3>
        <p>Sum of numbers: {sum}</p>
        <p>This calculation is memoized and only runs when the numbers array changes.</p>
        <button onClick={handleAddNumber}>Add Random Number</button>
        <p>Current numbers: {numbers.join(', ')}</p>
      </div>

      <div className="example-section">
        <h3>Example 2: useMemo for Filtering</h3>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search numbers..."
        />
        <p>Filtered numbers: {filteredNumbers.join(', ')}</p>
        <p>This filtering is memoized and only runs when numbers or search term changes.</p>
      </div>

      <div className="example-section">
        <h3>Example 3 & 4: useCallback for Event Handlers</h3>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment Count</button>
        <p>These handlers are memoized and only recreated when their dependencies change.</p>
      </div>

      <div className="example-section">
        <h3>Example 5: When NOT to use useMemo/useCallback</h3>
        <p>Simple calculation result: {simpleCalculation()}</p>
        <p>This calculation is simple and doesn't need memoization because:</p>
        <ul>
          <li>It's a basic multiplication operation</li>
          <li>The overhead of memoization would be greater than the calculation itself</li>
          <li>It doesn't depend on any complex data structures</li>
        </ul>
      </div>

      <div className="example-section">
        <h3>When to use useMemo:</h3>
        <ul>
          <li>Expensive calculations that depend on complex data structures</li>
          <li>Filtering or transforming large arrays</li>
          <li>Creating new objects or arrays that are used as dependencies in other hooks</li>
          <li>When the computation is more expensive than the memoization overhead</li>
        </ul>

        <h3>When to use useCallback:</h3>
        <ul>
          <li>When passing callbacks to optimized child components that rely on reference equality</li>
          <li>When the callback is used as a dependency in other hooks</li>
          <li>When the callback is used in event handlers that need to maintain the same reference</li>
          <li>When the callback is passed to a component that implements shouldComponentUpdate or React.memo</li>
        </ul>

        <h3>When NOT to use them:</h3>
        <ul>
          <li>Simple calculations or transformations</li>
          <li>When the overhead of memoization is greater than the benefit</li>
          <li>When the values or functions are simple and don't cause performance issues</li>
          <li>When the component doesn't re-render frequently</li>
        </ul>
      </div>
    </div>
  );
};

export default UseMemoAndCallback; 