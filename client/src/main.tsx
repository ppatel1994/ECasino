import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
// Pages
import Login from './pages/Login';
import Casino from './pages/Casino';
import SetUp from './pages/SetUp';
import Drawing from './pages/Drawing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/casino',
    element: <Casino />,
  },
  {
    path: '/setup',
    element: <SetUp />
  },
  {
    path: '/drawing/:drawId',
    element: <Drawing />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
