import { Login } from  "../Pages/Login";
import {createBrowserRouter, RouteObject} from "react-router-dom";
import HomePage from "../Pages/Home";
import Signup from "../Pages/SignUp";
import Tasks from "../Pages/Tasks";

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

    {
        path: "/MyTasks",
        element: <Tasks />
    },
];

export const router = createBrowserRouter(routes)