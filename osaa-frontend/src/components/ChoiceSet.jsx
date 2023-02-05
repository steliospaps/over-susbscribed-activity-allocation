import {  Skeleton, Typography } from "@mui/material";
import { Suspense, useContext, useEffect, useState } from "react";
import { Await, defer, useFetcher, useLoaderData } from "react-router-dom";


import ChoiceSetView from "./ChoiceSetView";

export function choiceSetLoader(api){
  return ({params})=> {
    const dataPromise=api.getChoiceSetById(params.setId)
    return defer({data: dataPromise} )
  }
}


export default (props) =>{

  const data = useLoaderData()

  return (
    <Suspense fallback= {<Skeleton>
          <ChoiceSetView name={'name'} description={'description'} choices={{}} />
        </Skeleton> } >
        <Await resolve={data.data}
        errorElement=<p>Error Loading Data </p> >
          {(data)=>(
            <ChoiceSetView name={data.name} description={data.description} choices={data.choices} />
            )}
        </Await>
      </Suspense>    
)
}