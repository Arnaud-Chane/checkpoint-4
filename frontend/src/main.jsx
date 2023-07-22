import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";
import userRoles from "./utils/constantRoles";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Page403 from "./pages/Page403";
import Page404 from "./pages/Page404";
import HomeAdminListingUser from "./pages/admin/HomeAdminListingUser";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: (
          <PrivateRoutes expectedRoles={[userRoles.admin, userRoles.user]}>
            <Home />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/page-403",
        element: <Page403 />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
      {
        path: "/admin",
        children: [
          {
            index: true,
            element: <Navigate to="/admin/user-list" replace />,
          },
          {
            path: "user-list",
            element: (
              <PrivateRoutes expectedRoles={[userRoles.admin]}>
                <HomeAdminListingUser />
              </PrivateRoutes>
            ),
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
