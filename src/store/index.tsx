import { create } from "zustand";
import { IUser, mockUsers } from "../data/mockUsers";

interface UserStore {
  users: IUser[];
  addUser: (user: Omit<IUser, "id">) => void;
  updateUser: (id: number, updatedData: Omit<IUser, "id">) => void;
  deleteUser: (id: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: mockUsers,
  updateUser: (id, updatedData) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...updatedData } : user,
      ),
    })),

  addUser: (user) =>
    set((state) => ({
      users: [...state.users, { ...user, id: Date.now() }],
    })),

  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((u) => u.id !== id),
    })),
}));
