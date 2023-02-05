import { Button } from "@mui/material"
import { NavLink, Outlet, useLoaderData } from "react-router-dom"

export function choiceSetsLoader(api){
  return ()=>{
    return api.getChoiceSets()
  }
}

export default ()=>{
  const data = useLoaderData()

  
  return (<>
    <nav>
      {data.map((item,index) => (
        <>
        <NavLink key={index} to={item.setId}>{item.name} ({item.setId}|{index})</NavLink>
        </>
      ))}
      
    </nav>
    <Outlet/>
  </>)
}