import React, { useState, useEffect } from 'react';
import AddUserForm from './components/users/AddUserForm';
import UserList from './components/users/UserList';
import { allThemes } from './themes';

function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  const theme = allThemes[themeIndex];

  useEffect(() => {
    document.body.style.background = theme.background;
    document.body.style.color = theme.color;
  }, [theme]);

  const toggleTheme = () => {
    setThemeIndex((themeIndex + 1) % allThemes.length);
  };

  return (
    <div className="app-container">
      <div className="topbar">
        <h1>User Management Dashboard</h1>
        <div style={{display:'flex', gap:8}}>
          <button className="btn" onClick={toggleTheme}>Change Theme ({theme.name})</button>
        </div>
      </div>

      <AddUserForm />
      <UserList />

    </div>
  );
}

export default App;
