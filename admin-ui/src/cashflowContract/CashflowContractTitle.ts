import { CashflowContract as TCashflowContract } from "../api/cashflowContract/CashflowContract";

export const CASHFLOWCONTRACT_TITLE_FIELD = "customServiceName";

export const CashflowContractTitle = (record: TCashflowContract): string => {
  return record.customServiceName || record.id;
};
