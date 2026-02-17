export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface ICustomer {
  id: number;
  userId: string;
  name: string;
  email: string;
  phone?: string;
  status: "active" | "inactive";
  createdAt: Date;
}

export const mockCustomers: ICustomer[] = [
  {
    id: 1,
    userId: "1",
    name: "Kamran Əliyev",
    email: "kamran@example.com",
    phone: "+994501234567",
    status: "active",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: 2,
    userId: "1",
    name: "Nigar İbrahimova",
    email: "nigar@example.com",
    phone: "+994551234567",
    status: "active",
    createdAt: new Date("2024-02-10"),
  },
  {
    id: 3,
    userId: "1",
    name: "Rəşad Quliyev",
    email: "reshad@example.com",
    status: "inactive",
    createdAt: new Date("2024-01-20"),
  },

  {
    id: 4,
    userId: "2",
    name: "Ali Məmmədov",
    email: "ali@example.com",
    phone: "+994701234567",
    status: "active",
    createdAt: new Date("2024-02-01"),
  },
  {
    id: 5,
    userId: "2",
    name: "Ayşə Həsənova",
    email: "ayse@example.com",
    status: "active",
    createdAt: new Date("2024-02-05"),
  },
];
