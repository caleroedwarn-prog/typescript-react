import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/homePage';
import './static/homePage.css'
import Tasks from './pages/Task';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Homepage />

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/tasks' element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
