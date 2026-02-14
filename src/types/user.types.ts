export interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
}
