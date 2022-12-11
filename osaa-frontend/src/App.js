
import React, { createContext, useEffect, useState } from "react";
import './App.css';

import { Button, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Header from "./components/Header";
import LoggedOut from "./components/LoggedOut";
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home'
import DummyClient from './client/DummyClient'
import { Outlet } from "react-router-dom";

// https://reach.tech/router



function App() {
  const [auth, setAuth] = useState(false)

  useEffect(()=>{
    setAuth(localStorage.getItem('token'))
  });

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Outlet/>
    </ThemeProvider>
    
  );
}

export default App;
