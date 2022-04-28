import { ExpenseUpdateManyWithoutUsersInput } from "./ExpenseUpdateManyWithoutUsersInput";
import { CashflowContractUpdateManyWithoutUsersInput } from "./CashflowContractUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  approvedExpenses?: ExpenseUpdateManyWithoutUsersInput;
  cashflowContract?: CashflowContractUpdateManyWithoutUsersInput;
  cashflowContractsManager?: CashflowContractUpdateManyWithoutUsersInput;
  expenses?: ExpenseUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
