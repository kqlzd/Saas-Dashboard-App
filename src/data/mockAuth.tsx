export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
  plan: "free" | "pro";
}

export const mockUsers: User[] = [
  {
    id: "1",
    email: "admin@test.com",
    password: "admin123",
    name: "Admin User",
    role: "admin",
    plan: "pro",
  },
  {
    id: "2",
    email: "user@test.com",
    password: "user123",
    name: "Regular User",
    role: "user",
    plan: "free",
  },
];

export const initMockAuth = () => {
  if (!localStorage.getItem("mock-users")) {
    localStorage.setItem("mock-users", JSON.stringify(mockUsers));
  }
};
