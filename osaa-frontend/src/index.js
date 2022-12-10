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

import Root, { loader as rootLoader,
action as rootAction } from './routes/Root';
import ErrorPage from './ErrorPage';
import Contact, {favoriteAction, loader as contactLoader} from './routes/Contact';
import EditContact, { editContactAction } from './routes/EditContact';
import { actionDestroyContact } from './routes/DestroyContact';
import Index from './routes/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: favoriteAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editContactAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: actionDestroyContact,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ]
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
