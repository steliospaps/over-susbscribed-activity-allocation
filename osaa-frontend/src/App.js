
import React, { createContext, useEffect, useState } from "react";
import './App.css';

import { Button, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Link, Router } from "@reach/router";
import Header from "./components/Header";
import LoggedOut from "./components/LoggedOut";
import Login from './components/Login';
import Logout from './components/Logout';
import { navigate } from "@reach/router";
import Home from './components/Home'
import DummyClient from './client/DummyClient'

// https://reach.tech/router


export const ApiContext = createContext({api: new DummyClient}) 

function App() {
  const [auth, setAuth] = useState(localStorage.getItem('token'))

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <ApiContext.Provider value={{api: new DummyClient}}>
      {auth ? (        
        <div>
          <nav>
            <Button variant="text"><Link to="/">Home</Link></Button>
            <Button variant="text"><Link to="logout">logout</Link></Button>
          </nav>
          <Router>
              <Home path="/" default/>
              
              <Logout path="logout" action={() => { setAuth(false) }} />

          </Router>
        </div>
      ) : (
        <div>
          <Router>
            <LoggedOut path="/" default/>
            <Login path="login/:token" action={() => { setAuth(true) }} />
          </Router>
        </div>
      )}
      </ApiContext.Provider>      
    </ThemeProvider>
    
  );
}

export default App;
