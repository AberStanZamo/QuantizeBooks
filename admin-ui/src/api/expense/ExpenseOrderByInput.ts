import { SortOrder } from "../../util/SortOrder";

export type ExpenseOrderByInput = {
  amount?: SortOrder;
  approval?: SortOrder;
  approverId?: SortOrder;
  businessEntity?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  paid?: SortOrder;
  purchaseDate?: SortOrder;
  requesterId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
