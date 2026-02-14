import { RouteObject } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Settings } from "../pages/Settings/Settings";
import { Users } from "../pages/Users/Users";
import { Layout } from "../components/Layout/Layout";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      // ← HAMISI BURDA
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "settings", // ← Layout children-də
        element: <Settings />,
      },
      {
        path: "users", // ← Layout children-də
        element: <Users />,
      },
    ],
  },
];
