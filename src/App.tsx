import './App.css'
import './styles/theme.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import JsxOverview from './components/JsxOverview'
import ComponentExample from './components/ComponentExample'
import PropsExample from './components/PropsExample'
import EventHandling from './components/EventHandling'
import StateManagement from './components/StateManagement'
import ConditionalRendering from './components/ConditionalRendering'
import ListAndKeys from './components/ListAndKeys'
import CustomHooks from './components/CustomHooks'
import ContextAPI from './components/ContextAPI'
import UseEffectAndMemo from './components/UseEffectAndMemo'

const AppContent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-container">
      <nav className="nav-menu">
        <h1>React Concepts</h1>
        <button 
          onClick={toggleTheme}
          className="theme-toggle"
          style={{
            marginBottom: '20px',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/jsx-overview">JSX Overview</Link></li>
          <li><Link to="/component">Component</Link></li>
          <li><Link to="/props">Props</Link></li>
          <li><Link to="/event-handling">Event Handling</Link></li>
          <li><Link to="/state-management">State Management</Link></li>
          <li><Link to="/conditional-rendering">Conditional Rendering</Link></li>
          <li><Link to="/list-keys">List & Keys</Link></li>
          <li><Link to="/custom-hooks">Custom Hooks</Link></li>
          <li><Link to="/context-api">Context API</Link></li>
          {/* <li><Link to="/use-effect-memo">useEffect & useMemo</Link></li> */}
        </ul>
      </nav>
      <main className="content">
        <Routes>
          <Route path="/" element={
            <div className="home">
              <h1>Welcome to React Concepts</h1>
              <p>Select a topic from the menu to learn more about React concepts.</p>
            </div>
          } />
          <Route path="/jsx-overview" element={<JsxOverview />} />
          <Route path="/component" element={<ComponentExample />} />
          <Route path="/props" element={<PropsExample />} />
          <Route path="/event-handling" element={<EventHandling />} />
          <Route path="/state-management" element={<StateManagement />} />
          <Route path="/conditional-rendering" element={<ConditionalRendering />} />
          <Route path="/list-keys" element={<ListAndKeys />} />
          <Route path="/custom-hooks" element={<CustomHooks />} />
          <Route path="/context-api" element={<ContextAPI />} />
          <Route path="/use-effect-memo" element={<UseEffectAndMemo />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App
