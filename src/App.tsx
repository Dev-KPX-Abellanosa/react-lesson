import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import JsxOverview from './components/JsxOverview'
import ComponentExample from './components/ComponentExample'
import PropsExample from './components/PropsExample'
import EventHandling from './components/EventHandling'
import StateManagement from './components/StateManagement'
import ConditionalRendering from './components/ConditionalRendering'
import ListAndKeys from './components/ListAndKeys'

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-menu">
          <h1>React Concepts</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jsx-overview">JSX Overview</Link></li>
            <li><Link to="/component">Component</Link></li>
            <li><Link to="/props">Props</Link></li>
            <li><Link to="/event-handling">Event Handling</Link></li>
            <li><Link to="/state-management">State Management</Link></li>
            <li><Link to="/conditional-rendering">Conditional Rendering</Link></li>
            <li><Link to="/list-keys">List & Keys</Link></li>
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
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
