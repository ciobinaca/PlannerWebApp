import { Login } from  "../Pages/Login";
import {createBrowserRouter, RouteObject} from "react-router-dom";
import HomePage from "../Pages/Home";
import Signup from "../Pages/SignUp";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/Home",
        element: <HomePage />
    },

    {
        path: "/SignUp",
        element: <Signup />
    },
];

export const router = createBrowserRouter(routes)