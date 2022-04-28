import { User } from "../user/User";

export type CashflowContract = {
  account?: "FoxrunDeliveryEnt" | null;
  acquisitionDate: Date | null;
  amountPerTerm: number | null;
  businessEntity?: "FoxRunDelivery" | "Quantize" | "HybridInnovations" | null;
  cashflowContracts?: Array<CashflowContract>;
  categories?: Array<
    | "SoftwareSubscription"
    | "Misc"
    | "Income"
    | "Deposit"
    | "Withdrawal"
    | "OperatingCost"
    | "LoanPayment"
  >;
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
    | null;
  updatedAt: Date;
  users?: Array<User>;
};
