import { User } from "../user/User";

export type Expense = {
  amount: number | null;
  approval: Date | null;
  approver?: User | null;
  businessEntity?: "FoxRunDelivery" | "Quantize" | "HybridInnovations" | null;
  createdAt: Date;
  id: string;
  notes: string | null;
  paid: Date | null;
  purchaseDate: Date | null;
  requester?: User | null;
  title: string | null;
  updatedAt: Date;
};
