import PrivateRoute from "@/components/layout/PrivateRoute";
import { UserLayout } from "@/layouts";
import { UserPage } from "@/pages";
import { RouteObject } from "react-router-dom";

const UserRouter: RouteObject = {
  element: <PrivateRoute />,
  path: "user",
  children: [
    {
      path: "",
      element: <UserLayout />,
      children: [
        {
          path: "",
          element: <UserPage />
        }
      ]
    }
  ]
};

export default UserRouter;