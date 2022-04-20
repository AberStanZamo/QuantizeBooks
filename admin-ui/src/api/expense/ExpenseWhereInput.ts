import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ExpenseWhereInput = {
  amount?: FloatNullableFilter;
  approval?: DateTimeNullableFilter;
  approver?: UserWhereUniqueInput;
  businessEntity?: "FoxRunDelivery" | "Quantize" | "HybridInnovations";
  id?: StringFilter;
  notes?: StringNullableFilter;
  paid?: DateTimeNullableFilter;
  purchaseDate?: DateTimeNullableFilter;
  requester?: UserWhereUniqueInput;
  title?: StringNullableFilter;
};
