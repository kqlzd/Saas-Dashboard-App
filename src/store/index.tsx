import { create } from "zustand";
import { ICustomer, mockCustomers } from "../data/mockUsers";

interface CustomerStore {
  customers: ICustomer[];
  addCustomer: (customer: Omit<ICustomer, "id" | "createdAt">) => void;
  updateCustomer: (id: number, updatedData: Partial<ICustomer>) => void;
  deleteCustomer: (id: number) => void;
  getCustomersByUserId: (userId: string) => ICustomer[];
}

export const useCustomerStore = create<CustomerStore>((set, get) => ({
  customers: mockCustomers,

  getCustomersByUserId: (userId: string) => {
    return get().customers.filter((customer) => customer.userId === userId);
  },

  addCustomer: (customer) =>
    set((state) => ({
      customers: [
        ...state.customers,
        {
          ...customer,
          id: Date.now(),
          createdAt: new Date(),
        },
      ],
    })),

  updateCustomer: (id, updatedData) =>
    set((state) => ({
      customers: state.customers.map((customer) =>
        customer.id === id ? { ...customer, ...updatedData } : customer,
      ),
    })),

  deleteCustomer: (id) =>
    set((state) => ({
      customers: state.customers.filter((c) => c.id !== id),
    })),
}));
