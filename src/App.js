import React, { useState } from 'react';
import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core';
import Home from './Home';


function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3ea6ff'
      },
      background: {
        default: darkMode ? '#232323' : '#fff',
        dark: darkMode ? '#232323' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#fff',
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
