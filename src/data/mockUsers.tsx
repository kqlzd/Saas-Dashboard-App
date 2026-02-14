export interface IUser {
  id: number;
  name: string;
  email: string;
}

export const mockUsers: IUser[] = [
  { id: 1, name: "Ali", email: "ali@test.com" },
  { id: 2, name: "Ayşə", email: "ayse@test.com" },
  { id: 3, name: "Rəşad", email: "reshad@test.com" },
];
