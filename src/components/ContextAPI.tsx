import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#333333' : '#ffffff',
        padding: '10px 20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Toggle Theme ({theme})
    </button>
  );
};

// Main Component
const ContextAPI = () => {
  return (
    <ThemeProvider>
      <div className="component-container">
        <h2>Context API Example</h2>
        <div className="example-section">
          <h3>Theme Switcher</h3>
          <ThemedButton />
          <p>This example demonstrates how to use Context API to manage theme state across components.</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ContextAPI; 