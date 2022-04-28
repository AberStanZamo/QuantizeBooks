import { CashflowContractCreateNestedManyWithoutCashflowContractsInput } from "./CashflowContractCreateNestedManyWithoutCashflowContractsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CashflowContractWhereUniqueInput } from "./CashflowContractWhereUniqueInput";
import { UserCreateNestedManyWithoutCashflowContractsInput } from "./UserCreateNestedManyWithoutCashflowContractsInput";

export type CashflowContractCreateInput = {
  account?: "FoxrunDeliveryEnt" | null;
  acquisitionDate?: Date | null;
  amountPerTerm?: number | null;
  businessEntity?: "FoxRunDelivery" | "Quantize" | "HybridInnovations" | null;
  categories?: Array<
    | "SoftwareSubscription"
    | "Misc"
    | "Income"
    | "Deposit"
    | "Withdrawal"
    | "OperatingCost"
    | "LoanPayment"
  >;
  contracts?: CashflowContractCreateNestedManyWithoutCashflowContractsInput;
  customServiceName?: string | null;
  expenseDate?: Date | null;
  isSeries?: boolean | null;
  manager?: UserWhereUniqueInput | null;
  notes?: string | null;
  oneTimeOnly?: boolean | null;
  series?: CashflowContractWhereUniqueInput | null;
  serviceName?: string | null;
  term?:
    | "Monthly"
    | "Quarterly"
    | "Yearly"
    | "UsersMonthly"
    | "UsersQuarterly"
    | null;
  users?: UserCreateNestedManyWithoutCashflowContractsInput;
};
