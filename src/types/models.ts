import { User } from "../data/mockAuth";

export interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
}

export interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}
