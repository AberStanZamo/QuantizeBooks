import { Expense } from "../expense/Expense";

export type User = {
  approvedExpenses?: Array<Expense>;
  createdAt: Date;
  expenses?: Array<Expense>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
