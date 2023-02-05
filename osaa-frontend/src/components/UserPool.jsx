import {  Skeleton, Typography } from "@mui/material";
import { Suspense, useContext, useEffect, useState } from "react";
import { Await, defer, useFetcher, useLoaderData } from "react-router-dom";
import { ApiContext } from "../App";

import DownloadCSVButton from "./DownloadCSVButton";
import UserPoolTable from "./UserPoolTable";
import UserPoolView from "./UserPoolView";

export function userPoolLoader(api){
  return ({params})=> {
    const dataPromise=api.getUserPoolById(params.poolId)
    return defer({data: dataPromise} )
  }
}


export default (props) =>{

  const data = useLoaderData()

  return (
    <Suspense fallback= {<Skeleton>
          <UserPoolView name={"TestName"} users={[{extId: "extId1",credential: "credentials"},{extId: "extId2",credential: "credentials"}]} />
        </Skeleton> } >
        <Await resolve={data.data}
        errorElement=<p>Error Loading Data </p> >
          {(data)=>(
            <UserPoolView name={data.name} users={data.users} />
            )}
        </Await>
      </Suspense>    
)
}