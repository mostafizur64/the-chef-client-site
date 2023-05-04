
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Navbar from "../Navbar/Navbar";
import Blog from "../Blog/Blog";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import Chefs from "../Chefs/Chefs";
import ChefRecipes from "../ChefRecipes/ChefRecipes";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import About from "../About/About";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[{       
        path:'/',
        element:<Home></Home>

      },
      {
        path:'/navbar',
        element:<Navbar></Navbar>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
     
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/chefRecipes/:id',
        element:<PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
        loader:({params})=>fetch(`https://the-chef-server-project-mostafizur64.vercel.app/chef/${params.id}`),
      }
    
    ]
    },
  ]);
  

export default router;