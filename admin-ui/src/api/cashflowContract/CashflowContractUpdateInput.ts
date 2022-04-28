import { CashflowContractUpdateManyWithoutCashflowContractsInput } from "./CashflowContractUpdateManyWithoutCashflowContractsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CashflowContractWhereUniqueInput } from "./CashflowContractWhereUniqueInput";
import { UserUpdateManyWithoutCashflowContractsInput } from "./UserUpdateManyWithoutCashflowContractsInput";

export type CashflowContractUpdateInput = {
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
  contracts?: CashflowContractUpdateManyWithoutCashflowContractsInput;
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
    | "UsersYearly"
    | null;
  users?: UserUpdateManyWithoutCashflowContractsInput;
};
