import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/homePage';
import './static/homePage.css';
import './static/theme.css';
import Tasks from './pages/Task';
import Layout from './components/Layout';
import PreviouseTask from './pages/previoustask';
import Settings from './pages/Settings';
import Bin from './pages/Bin';
import Backup from './pages/Backup';



function App() {
  return (
    <div className="App">
      <h1 className="app-header"> ToDO Prior</h1>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/previouseTask" element={<PreviouseTask />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/bin" element={<Bin />} />
            <Route path="/backup" element={<Backup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
