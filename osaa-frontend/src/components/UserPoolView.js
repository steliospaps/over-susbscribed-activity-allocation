import {  Skeleton, Typography } from "@mui/material";
import { Suspense, useContext, useEffect, useState } from "react";
import { Await, defer, useFetcher, useLoaderData } from "react-router-dom";
import { ApiContext } from "../App";

import DownloadCSVButton from "./DownloadCSVButton";
import UserPoolTable from "./UserPoolTable";

export default (props) =>{

  return (
            <>
          <Typography variant="h6">{props.name}</Typography>
          <DownloadCSVButton 
            headers={()=>['External Id','Url']}
            data={()=>Object.values(props.users).map((item,index)=>[item.extId,encodeURI(window.location.origin+'/login/'+item.credential)])}
            filename={props.name+'.csv'}>
              Download as CSV
            </DownloadCSVButton>
            <UserPoolTable users={props.users} />
            </>
)
}