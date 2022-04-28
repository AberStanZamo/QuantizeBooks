import { ExpenseCreateNestedManyWithoutUsersInput } from "./ExpenseCreateNestedManyWithoutUsersInput";
import { CashflowContractCreateNestedManyWithoutUsersInput } from "./CashflowContractCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  approvedExpenses?: ExpenseCreateNestedManyWithoutUsersInput;
  cashflowContract?: CashflowContractCreateNestedManyWithoutUsersInput;
  cashflowContractsManager?: CashflowContractCreateNestedManyWithoutUsersInput;
  expenses?: ExpenseCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
