import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../App";
import DownloadCSVButton from "./DownloadCSVButton";
import UserPoolTable from "./UserPoolTable";

export default (props) =>{

  const [data,setData] = useState({})
  const [loading,setLoading] = useState(true)
//  [failed,setFailed] = useState(false)
  const api = useContext(ApiContext).api
  useEffect(()=>{
    setLoading(true)
    api.getUserPoolById(props.poolId).then(result => {
      setData(result)
      console.log("got result ",result)
      setLoading(false)
    }, error=>console.log("error",error))
  },[props.poolId])


  return (
    <div>
      {loading ? 
      (
        <Skeleton>
          <Typography variant="h6">Some Name</Typography>
        </Skeleton>
      )
      :(
        <div>
        <Typography variant="h6">{data.name}</Typography>
        <DownloadCSVButton 
          headers={()=>['External Id','Url']}
          data={()=>Object.values(data.users).map((item,index)=>[item.extId,encodeURI(window.location.origin+'/login/'+item.credential)])}
          filename={data.name+'.csv'}>
            Download as CSV
          </DownloadCSVButton>
          <UserPoolTable users={data.users} />
        </div>
      )
      }
    </div>
)
}