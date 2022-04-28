import { CashflowContractWhereInput } from "./CashflowContractWhereInput";
import { CashflowContractOrderByInput } from "./CashflowContractOrderByInput";

export type CashflowContractFindManyArgs = {
  where?: CashflowContractWhereInput;
  orderBy?: Array<CashflowContractOrderByInput>;
  skip?: number;
  take?: number;
};
