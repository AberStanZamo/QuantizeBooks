import { SortOrder } from "../../util/SortOrder";

export type CashflowContractOrderByInput = {
  account?: SortOrder;
  acquisitionDate?: SortOrder;
  amountPerTerm?: SortOrder;
  businessEntity?: SortOrder;
  categories?: SortOrder;
  createdAt?: SortOrder;
  customServiceName?: SortOrder;
  expenseDate?: SortOrder;
  id?: SortOrder;
  isSeries?: SortOrder;
  managerId?: SortOrder;
  notes?: SortOrder;
  oneTimeOnly?: SortOrder;
  seriesId?: SortOrder;
  serviceName?: SortOrder;
  term?: SortOrder;
  updatedAt?: SortOrder;
};
