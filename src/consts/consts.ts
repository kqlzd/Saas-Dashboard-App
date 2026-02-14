import { BarChart, Home, Users, FileText, Settings } from "lucide-react";
import { INavItem } from "../models/models";

export const NAV_ITEMS: INavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "analytics", label: "Analytics", icon: BarChart },
  { id: "users", label: "Users", icon: Users },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "settings", label: "Settings", icon: Settings },
];
