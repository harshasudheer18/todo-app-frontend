import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

function App() {
  const [user, setUser] = useState({});
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser}/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard user={user}/>}/>
      </Routes>
    </div>
  );
}

export default App;
