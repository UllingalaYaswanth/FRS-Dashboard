import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Departments from './pages/Departments';
import AttendanceStats from './pages/Statistics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="statistics" element={<AttendanceStats />} />
          <Route path="department" element={<Departments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
