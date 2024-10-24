import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Calendar from '../Calendar/Calendar';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import useToken from './useToken';

function App() {
  const {token, setToken} = useToken()

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/calendar" element={<Calendar />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;