import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Rootlayout from './Layout/Rootlayout.jsx'
import Addproduct from './pages/Addproduct.jsx'
import Allproduct from './pages/Allproduct.jsx'

const router= createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: App },
      { path: "/addproduct", Component: Addproduct },
      { path: "/allproduct", Component: Allproduct },
     
    ],
  },
  {
    path: "/login",
    Component: Login,
    
  },
]);

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
