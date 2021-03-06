import { User } from "../user/User";

export type CashflowContract = {
  account?: "FoxrunDeliveryEnt" | null;
  acquisitionDate: Date | null;
  amountPerTerm: number | null;
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
  contracts?: Array<CashflowContract>;
  createdAt: Date;
  customServiceName: string | null;
  expenseDate: Date | null;
  id: string;
  isSeries: boolean | null;
  manager?: User | null;
  notes: string | null;
  oneTimeOnly: boolean | null;
  series?: CashflowContract | null;
  serviceName: string | null;
  term?:
    | "Monthly"
    | "Quarterly"
    | "Yearly"
    | "UsersMonthly"
    | "UsersQuarterly"
    | "UsersYearly"
    | null;
  updatedAt: Date;
  users?: Array<User>;
};
