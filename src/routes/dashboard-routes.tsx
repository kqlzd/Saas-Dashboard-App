import { RouteObject } from "react-router-dom";
import { Dashboard, Layout, Settings, Users } from "../pages";
import { Analytics } from "../pages/Analytics/Analytics";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
    ],
  },
];
