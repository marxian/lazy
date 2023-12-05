import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Root from './Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}>
        <Route index element={<Home />} />
        <Route path="lazy" lazy={() => import('./Lazy.js')} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

