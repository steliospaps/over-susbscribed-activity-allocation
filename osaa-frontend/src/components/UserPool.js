import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../App";
import DownloadCSVButton from "./DownloadCSVButton";

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
        <TableContainer component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell>External Id</TableCell>
              <TableCell>Credentials</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            //TODO: limit or paginate
            //TODO: export to clipboard?
            //https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
            Object.values(data.users).map((item,index)=>(
              <TableRow key={index}>
                <TableCell>{item.extId}</TableCell>
                <TableCell><a href={encodeURI(window.location.origin+'/login/'+item.credential)}>login as {item.extId}</a> </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
        </div>
      )
      }
    </div>
)
}