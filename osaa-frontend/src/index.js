import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { createRoot } from 'react-dom/client';


import ErrorPage from './components/ErrorPage';
import UserPool, { userPoolLoader } from './components/UserPool';
import DummyClient from './client/DummyClient';
import UserPools, { userPoolsLoader } from './components/UserPools';

import ChoiceSets,{choiceSetsLoader} from './components/ChoiceSets';
import ChoiceSet,{choiceSetLoader} from './components/ChoiceSet';

const api=new DummyClient;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [
          { 
                path: "user-pool",
                element: <UserPools/>,
                loader: userPoolsLoader(api),
                children: [
                  
                  {
                    path: ":poolId",
                    element: <UserPool />,
                    loader: userPoolLoader(api),
                  },
                ],

                path: "choice-set",
                element: <ChoiceSets/>,
                loader: choiceSetsLoader(api),
                children: [                  

                  {
                    path: ":setId",
                    element: <ChoiceSet />,
                    loader: choiceSetLoader(api),
                  }
                ],
                
          }
        ],
      }
    ]

  },
  
]);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
