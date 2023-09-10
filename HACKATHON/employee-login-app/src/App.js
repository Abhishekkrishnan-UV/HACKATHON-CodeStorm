import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [employeeLoggedIn, setEmployeeLoggedIn] = useState(false);

  const handleUserLogin = () => {
    // Simulate user authentication logic
    if (username === 'user' && password === 'password') {
      setUserLoggedIn(true);
      setEmployeeLoggedIn(false); // Reset employee login
    } else {
      alert('Invalid credentials');
    }
  };

  const handleEmployeeLogin = () => {
    // Simulate employee authentication logic
    if (username === 'employee' && password === 'password') {
      setEmployeeLoggedIn(true);
      setUserLoggedIn(false); // Reset user login
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setUserLoggedIn(false);
    setEmployeeLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="App">
      <div className="login-container">
        <div className="login-section">
          <h1>User Login</h1>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleUserLogin}>Login</button>
        </div>
        <div className="login-section">
          <h1>Employee Login</h1>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleEmployeeLogin}>Login</button>
        </div>
      </div>
      {(userLoggedIn || employeeLoggedIn) && (
        <div className="welcome-section">
          <h2>
            Welcome, {userLoggedIn ? 'User' : 'Employee'}!
          </h2>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
