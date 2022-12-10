import React, { useEffect } from "react";
 /*
  
export default () =>{
   useEffect( () => {
     console.log("Logout removing item")
     localStorage.removeItem('token')
     //const foo= async () => {
     // await navigate('/')
    // }
    // foo()
  })

  console.log("rendering logout")

   return (<div>logged out</div>)
} */

export default props=>{
   return(<div>logged out {props.location.pathname} </div>)}