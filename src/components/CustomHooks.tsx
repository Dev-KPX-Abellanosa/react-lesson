import { useState, useEffect } from 'react';

// Custom hook for window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

// Custom hook for local storage
const useLocalStorage = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: string) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};

const CustomHooks = () => {
  const { width, height } = useWindowSize();
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div className="component-container">
      <h2>Custom Hooks Example</h2>
      
      <div className="example-section">
        <h3>Window Size Hook</h3>
        <p>Window width: {width}px</p>
        <p>Window height: {height}px</p>
      </div>

      <div className="example-section">
        <h3>Local Storage Hook</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <p>Stored name: {name}</p>
      </div>
    </div>
  );
};

export default CustomHooks; 