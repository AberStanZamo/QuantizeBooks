import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CashflowContractListRelationFilter } from "./CashflowContractListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CashflowContractWhereUniqueInput } from "./CashflowContractWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CashflowContractWhereInput = {
  account?: "FoxrunDeliveryEnt";
  acquisitionDate?: DateTimeNullableFilter;
  amountPerTerm?: FloatNullableFilter;
  businessEntity?: "FoxRunDelivery" | "Quantize" | "HybridInnovations";
  contracts?: CashflowContractListRelationFilter;
  customServiceName?: StringNullableFilter;
  expenseDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isSeries?: BooleanNullableFilter;
  manager?: UserWhereUniqueInput;
  notes?: StringNullableFilter;
  oneTimeOnly?: BooleanNullableFilter;
  series?: CashflowContractWhereUniqueInput;
  serviceName?: StringNullableFilter;
  term?:
    | "Monthly"
    | "Quarterly"
    | "Yearly"
    | "UsersMonthly"
    | "UsersQuarterly"
    | "UsersYearly";
  users?: UserListRelationFilter;
};
