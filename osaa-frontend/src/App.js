
import React, { createContext, useEffect, useState } from "react";
import './App.css';

import { Button, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Header from "./components/Header";
import LoggedOut from "./components/LoggedOut";
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home'
import DummyClient from './client/DummyClient'

// https://reach.tech/router

const Home1 = ()=><div>Home1</div>
const Logout1 = ()=><div>logout1</div>

export const ApiContext = createContext({api: new DummyClient}) 

function App() {
  const [auth, setAuth] = useState(false)

  useEffect(()=>{
    setAuth(localStorage.getItem('token'))
  });

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApiContext.Provider value={{api: new DummyClient}}>
      <Header />
      <nav>
          <Button variant="text" >Home</Button>
            <Button variant="text" >A</Button>
            <Button variant="text" >logout</Button>
          </nav> 

      </ApiContext.Provider>      
    </ThemeProvider>
    
  );
}

export default App;
