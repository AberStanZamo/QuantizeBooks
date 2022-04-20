import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  approvedExpenses?: ExpenseListRelationFilter;
  expenses?: ExpenseListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
