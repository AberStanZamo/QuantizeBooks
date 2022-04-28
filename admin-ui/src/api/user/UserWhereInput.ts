import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { CashflowContractListRelationFilter } from "../cashflowContract/CashflowContractListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  approvedExpenses?: ExpenseListRelationFilter;
  cashflowContract?: CashflowContractListRelationFilter;
  cashflowContractsManager?: CashflowContractListRelationFilter;
  expenses?: ExpenseListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
