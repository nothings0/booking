import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import MainRouter from "./Main";
import UserRouter from "./User";

const router: RouteObject[] = [
  MainRouter,
  UserRouter,
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default createBrowserRouter(router);