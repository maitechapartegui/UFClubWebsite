import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../navbar';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Calendar from '../../pages/Calendar/Calendar';
import Profile from '../../pages/Profile/Profile';
import SignUp from '../../pages/Sign-Up/sign-up';
import Login from '../Login/Login';
import useToken from './useToken';
import Home from '../../pages';

function App() {
  const {token, setToken} = useToken()

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/calendar" element={<Calendar />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/sign-up" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;