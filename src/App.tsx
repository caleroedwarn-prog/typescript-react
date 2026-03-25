import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/homePage';
import './static/homePage.css'
import Tasks from './pages/Task';
import Navbar from './components/Navbar';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <h1 style={{ background: "black", color: "white" }}>ToDO Prior</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/homePage" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
