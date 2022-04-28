import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  DateTimeInput,
  NumberInput,
  SelectArrayInput,
  ReferenceArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
} from "react-admin";

import { CashflowContractTitle } from "./CashflowContractTitle";
import { UserTitle } from "../user/UserTitle";

export const CashflowContractEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="account"
          label="Account"
          choices={[
            { label: "Foxrun Delivery - Ent", value: "FoxrunDeliveryEnt" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="Acquisition Date" source="acquisitionDate" />
        <NumberInput label="Amount Per Term" source="amountPerTerm" />
        <SelectInput
          source="businessEntity"
          label="Business Entity"
          choices={[
            { label: "Fox Run Delivery", value: "FoxRunDelivery" },
            { label: "Quantize", value: "Quantize" },
            { label: "Hybrid Innovations", value: "HybridInnovations" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectArrayInput
          label="Categories"
          source="categories"
          choices={[
            { label: "Software Subscription", value: "SoftwareSubscription" },
            { label: "Misc", value: "Misc" },
            { label: "Income", value: "Income" },
            { label: "Deposit", value: "Deposit" },
            { label: "Withdrawal", value: "Withdrawal" },
            { label: "Operating Cost", value: "OperatingCost" },
            { label: "Loan Payment", value: "LoanPayment" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="contracts"
          reference="CashflowContract"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CashflowContractTitle} />
        </ReferenceArrayInput>
        <TextInput label="Custom Service Name" source="customServiceName" />
        <DateTimeInput label="Expense Date" source="expenseDate" />
        <BooleanInput label="Is Series" source="isSeries" />
        <ReferenceInput source="user.id" reference="User" label="Manager">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Notes" source="notes" />
        <BooleanInput label="One Time Only" source="oneTimeOnly" />
        <ReferenceInput
          source="cashflowcontract.id"
          reference="CashflowContract"
          label="Series"
        >
          <SelectInput optionText={CashflowContractTitle} />
        </ReferenceInput>
        <TextInput label="Service Name" source="serviceName" />
        <SelectInput
          source="term"
          label="Term"
          choices={[
            { label: "Monthly", value: "Monthly" },
            { label: "Quarterly", value: "Quarterly" },
            { label: "Yearly", value: "Yearly" },
            { label: "Users/Monthly", value: "UsersMonthly" },
            { label: "Users/Quarterly", value: "UsersQuarterly" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
