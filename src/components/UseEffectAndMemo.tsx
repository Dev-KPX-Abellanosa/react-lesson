import { useState, useEffect, useMemo } from 'react';

const UseEffectAndMemo = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<number[]>([]);

  // useEffect example - fetch data when component mounts
  useEffect(() => {
    console.log('Component mounted');
    // Simulate fetching data
    const fetchData = async () => {
      const newData = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
      setData(newData);
    };
    fetchData();

    // Cleanup function
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array means this runs once on mount

  // useEffect example - update document title when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Runs whenever count changes

  // useMemo example - compute expensive calculation
  const sum = useMemo(() => {
    console.log('Computing sum...');
    return data.reduce((acc, curr) => acc + curr, 0);
  }, [data]); // Only recompute when data changes

  return (
    <div className="component-container">
      <h2>useEffect and useMemo Examples</h2>
      
      <div className="example-section">
        <h3>useEffect Example</h3>
        <p>Current count: {count}</p>
        <button onClick={() => setCount(c => c + 1)}>
          Increment Count
        </button>
        <p>Check the document title to see useEffect in action!</p>
      </div>

      <div className="example-section">
        <h3>useMemo Example</h3>
        <p>Random numbers: {data.join(', ')}</p>
        <p>Sum of numbers: {sum}</p>
        <button onClick={() => setData(Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)))}>
          Generate New Numbers
        </button>
        <p>Notice how the sum is only recalculated when the numbers change!</p>
      </div>
    </div>
  );
};

export default UseEffectAndMemo; 