import { Button } from "@mui/material"
import { NavLink, Outlet, useLoaderData } from "react-router-dom"

export function userPoolsLoader(api){
  return ()=>{
    return api.getUserPools()
  }
}

export default ()=>{
  const data = useLoaderData()

  
  return (<>
    <nav>
      {data.map((item,index) => (
        <>
        <NavLink key={index} to={item.poolId}>{item.name} ({item.poolId}|{index})</NavLink>
        </>
      ))}
      
    </nav>
    <Outlet/>
  </>)
}