/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { registerEnumType } from "@nestjs/graphql";

export enum EnumCashflowContractCategories {
  SoftwareSubscription = "SoftwareSubscription",
  Misc = "Misc",
  Income = "Income",
  Deposit = "Deposit",
  Withdrawal = "Withdrawal",
  OperatingCost = "OperatingCost",
  LoanPayment = "LoanPayment",
}

registerEnumType(EnumCashflowContractCategories, {
  name: "EnumCashflowContractCategories",
});