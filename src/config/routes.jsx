import React from "react";

import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";

import {
    createBrowserRouter
} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    }
])

export default router;