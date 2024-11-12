import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Use HashRouter
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
