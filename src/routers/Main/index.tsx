import { MainLayout } from "@/layouts";
import {HomePage} from "@/pages";
import { RouteObject } from "react-router-dom";

const MainRouter: RouteObject = {
  element: <MainLayout />,
  path: "/",
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
  ],
};

export default MainRouter;