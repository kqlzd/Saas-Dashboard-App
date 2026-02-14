import { BarChart, Home, Users, FileText, Settings } from "lucide-react";
import { INavItem } from "../models/models";

export const NAV_ITEMS: INavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: Home, link: "/" },
  { id: "analytics", label: "Analytics", icon: BarChart, link: "/analytics" },
  { id: "users", label: "Users", icon: Users, link: "/users" },
  { id: "documents", label: "Documents", icon: FileText, link: "/documents" },
  { id: "settings", label: "Settings", icon: Settings, link: "/settings" },
];
