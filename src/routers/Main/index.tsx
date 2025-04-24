import { MainLayout } from "@/layouts";
import { Landing } from "@/pages";
import { RouteObject } from "react-router-dom";

const MainRouter: RouteObject = {
  element: <MainLayout />,
  path: "/",
  children: [
    {
      path: "/",
      element: <Landing />,
    },
  ],
};

export default MainRouter;