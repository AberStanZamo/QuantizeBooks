import { ExpenseCreateNestedManyWithoutUsersInput } from "./ExpenseCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  approvedExpenses?: ExpenseCreateNestedManyWithoutUsersInput;
  expenses?: ExpenseCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
