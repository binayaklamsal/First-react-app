import React from 'react'
import {Outlet, useRoutes} from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/static/Layout'
import About from './pages/About';
import Contact from './pages/Contact';
import NewModels from './pages/Vehicles';
import Services from './pages/Services';
import Login from './pages/Login';
import Signup from './pages/Signup'


const Router = () => {
  const routes = useRoutes([
    {
      path: "login",
      element: <Login/>,
    },
    {
      path: "register",
      element: <Signup/>
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "newModels",
          element: <NewModels/>
        },
     
      ],
    },
  ]);
  return routes;
};

export default Router;

