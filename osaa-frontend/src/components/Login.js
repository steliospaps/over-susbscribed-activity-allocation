import { navigate, Redirect } from "@reach/router";
import React, { useEffect } from "react";

export default props =>{
   useEffect( () => {
      console.log("setting token")
      localStorage.setItem('token',props.token)
      props.action()
      navigate(`/`)
   })
   return (<p>should not see this</p>)
}