import { Expense } from "../expense/Expense";
import { CashflowContract } from "../cashflowContract/CashflowContract";

export type User = {
  approvedExpenses?: Array<Expense>;
  cashflowContract?: Array<CashflowContract>;
  cashflowContractsManager?: Array<CashflowContract>;
  createdAt: Date;
  expenses?: Array<Expense>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
