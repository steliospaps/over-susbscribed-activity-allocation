import { navigate, Redirect } from "@reach/router";
import React, { useEffect } from "react";

export default props =>{
   useEffect( () => {
      console.log("Logout removing item")
     localStorage.removeItem('token')
     props.action()
     navigate(`/`)
  })

   return (<div>logged out</div>)
}