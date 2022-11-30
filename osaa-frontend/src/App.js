
import './App.css';
import React, { useEffect, useState } from "react"

import { Router, Link, Redirect } from "@reach/router"
import Header from "./pages/Header";
import LoggedOut from "./pages/LoggedOut";
import Login from './pages/Login';
import Logout from './pages/Logout';

// https://reach.tech/router


let Home = () => (
  <div>
    Home
  </div>
)

let Dashboard = () => <div>Dash</div>

let NotFound= () => {
  
  useEffect(()=>console.log("not found"))

  //return (<Redirect to="/ddd "/>)
  return (<div>not found</div>)
}

let Foo = () => (<div>foo</div>)
let Foo2 = () => (<div>foo</div>)

function App() {
  localStorage.removeItem('token')
  const [auth,setAuth] = useState(localStorage.getItem('token'))

  return (
    <div>
      <Header />
      <p>auth: {auth?"true":"false"}</p>
      {auth ? (
        <div>
          <nav>
            <Link to="/">Home</Link> 
            <Link to="logout">logout</Link> 
            <Link to="foo">foo</Link> 
          </nav>
          <Router>
            <Home path="/" />

            <Foo path="/" />
            <Foo2 path="foo" />
            <Logout path="logout" action={()=>{setAuth(false)}} />

            <NotFound default/>

          </Router>
        </div>
      ) : (
        <div>
        <Router>
          <LoggedOut path="/" />
          <Login path="login/:token" action={()=>{setAuth(true)}} />
          <NotFound default/>
        </Router>
        </div>
        )}
    </div>
  );
}

export default App;
