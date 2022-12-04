
import React, { useEffect, useState } from "react";
import './App.css';

import { Button, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Link, Router } from "@reach/router";
import Header from "./pages/Header";
import LoggedOut from "./pages/LoggedOut";
import Login from './pages/Login';
import Logout from './pages/Logout';
import { navigate } from "@reach/router";


// https://reach.tech/router


let Home = () => (
  <div>
    Home
  </div>
)

let Dashboard = () => <div>Dash</div>

let NotFound = () => {

  useEffect(() => console.log("not found"))

  //return (<Redirect to="/ddd "/>)
  return (<div>not found</div>)
}

let Foo = () => (<div>foo</div>)
let Foo2 = () => (<div>foo</div>)

function App() {
  const [auth, setAuth] = useState(localStorage.getItem('token'))

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
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
      </main>
    </ThemeProvider>
    
  );
}

export default App;
