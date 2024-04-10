import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
