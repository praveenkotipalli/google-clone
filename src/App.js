
import { useState } from 'react';
import './App.css';
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage';
function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  return (
    <div className={darkTheme?'dark':'light'}>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>}/>
            <Route path='search' element={<SearchPage darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    // <Router>
    // <div className={darkTheme?'light':'dark'}>
    //   <Home darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
    // </div>
    // </Router>
  );
}

export default App;
