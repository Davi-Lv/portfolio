import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { enable as enableDarkMode, disable as disableDarkMode } from 'darkreader';
import { FaSun, FaMoon } from 'react-icons/fa';

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      disableDarkMode();
    } else {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <App />
      <button onClick={toggleDarkMode} style={floatingButtonStyle}>
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </>
  );
};

const floatingButtonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '10px',
  backgroundColor: '#ff8a1e',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s, transform 0.3s',
};

const floatingButtonHoverStyle = {
  ...floatingButtonStyle,
  transform: 'scale(1.1)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);