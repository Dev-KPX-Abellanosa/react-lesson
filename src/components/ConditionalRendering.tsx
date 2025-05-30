import React, { useState } from 'react';

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'user' | null>(null);
  const [showContent, setShowContent] = useState(true);

  // Conditional rendering with if/else
  const renderUserStatus = () => {
    if (isLoggedIn) {
      return <p>Welcome back!</p>;
    } else {
      return <p>Please log in</p>;
    }
  };

  // Conditional rendering with ternary
  const renderRoleBasedContent = () => {
    return userRole === 'admin' ? (
      <div className="admin-panel">
        <h3>Admin Panel</h3>
        <p>You have access to all features</p>
      </div>
    ) : (
      <div className="user-panel">
        <h3>User Panel</h3>
        <p>You have limited access</p>
      </div>
    );
  };

  // Conditional rendering with &&
  const renderAdminFeatures = () => {
    return userRole === 'admin' && (
      <div className="admin-features">
        <h4>Admin Features</h4>
        <ul>
          <li>Manage Users</li>
          <li>View Analytics</li>
          <li>System Settings</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="conditional-rendering">
      <h1>Conditional Rendering in React</h1>

      <section>
        <h2>If/Else Rendering</h2>
        <div className="login-section">
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
          {renderUserStatus()}
        </div>
      </section>

      <section>
        <h2>Ternary Operator</h2>
        <div className="role-section">
          <select
            value={userRole || ''}
            onChange={(e) => setUserRole(e.target.value as 'admin' | 'user' | null)}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          {renderRoleBasedContent()}
        </div>
      </section>

      <section>
        <h2>Logical && Operator</h2>
        {renderAdminFeatures()}
      </section>

      <section>
        <h2>Toggle Content</h2>
        <button onClick={() => setShowContent(!showContent)}>
          {showContent ? 'Hide' : 'Show'} Content
        </button>
        {showContent && (
          <div className="toggle-content">
            <p>This content can be toggled</p>
            <p>It will appear and disappear based on state</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ConditionalRendering; 