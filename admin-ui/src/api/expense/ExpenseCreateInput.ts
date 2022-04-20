import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ExpenseCreateInput = {
  amount?: number | null;
  approval?: Date | null;
  approver?: UserWhereUniqueInput | null;
  businessEntity?: "FoxRunDelivery" | "Quantize" | "HybridInnovations" | null;
  notes?: string | null;
  paid?: Date | null;
  purchaseDate?: Date | null;
  requester?: UserWhereUniqueInput | null;
  title?: string | null;
};
