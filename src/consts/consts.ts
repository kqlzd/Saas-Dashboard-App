import {
  BarChart,
  Home,
  Users,
  Activity,
  DollarSign,
  DollarSignIcon,
} from "lucide-react";
import { INavItem } from "../models/models";
import { createContext } from "react";
import { AuthContextType } from "../types/models";

export const NAV_ITEMS: INavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: Home, link: "/" },
  { id: "analytics", label: "Analytics", icon: BarChart, link: "/analytics" },
  { id: "users", label: "Users", icon: Users, link: "/users" },
  {
    id: "checkout",
    label: "Checkout",
    icon: DollarSignIcon,
    link: "/checkout",
  },
];

export const stats = [
  {
    title: "Total Users",
    value: "150",
    icon: Users,
    color: "blue",
    trend: "+12%",
  },
  {
    title: "Active Sessions",
    value: "42",
    icon: Activity,
    color: "green",
    trend: "+8%",
  },
  {
    title: "Revenue",
    value: "$12,450",
    icon: DollarSign,
    color: "purple",
    trend: "+23%",
  },
];

export const COLORS = ["#10b981", "#ef4444"];

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
