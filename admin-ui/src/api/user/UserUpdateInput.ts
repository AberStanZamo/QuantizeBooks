import { ExpenseUpdateManyWithoutUsersInput } from "./ExpenseUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  approvedExpenses?: ExpenseUpdateManyWithoutUsersInput;
  expenses?: ExpenseUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
