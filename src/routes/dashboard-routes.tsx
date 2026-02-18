import { RouteObject } from "react-router-dom";
import { Dashboard, Layout, Users } from "../pages";
import { Analytics } from "../pages/Analytics/Analytics";
import { Login } from "../pages/Login/Login";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";
import { CheckoutPage } from "../pages/CheckoutPage/CheckoutPage";
import { SuccessPage } from "../pages/CheckoutPage/SuccessPage";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
];
