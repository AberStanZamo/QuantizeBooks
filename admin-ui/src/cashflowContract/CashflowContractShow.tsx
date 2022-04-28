import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CASHFLOWCONTRACT_TITLE_FIELD } from "./CashflowContractTitle";

export const CashflowContractShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Account" source="account" />
        <TextField label="Acquisition Date" source="acquisitionDate" />
        <TextField label="Amount Per Term" source="amountPerTerm" />
        <TextField label="Business Entity" source="businessEntity" />
        <TextField label="Categories" source="categories" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Custom Service Name" source="customServiceName" />
        <TextField label="Expense Date" source="expenseDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Series" source="isSeries" />
        <ReferenceField label="Manager" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Notes" source="notes" />
        <BooleanField label="One Time Only" source="oneTimeOnly" />
        <ReferenceField
          label="Series"
          source="cashflowcontract.id"
          reference="CashflowContract"
        >
          <TextField source={CASHFLOWCONTRACT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Service Name" source="serviceName" />
        <TextField label="Term" source="term" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CashflowContract"
          target="CashflowContractId"
          label="Cashflow Contracts"
        >
          <Datagrid rowClick="show">
            <TextField label="Account" source="account" />
            <TextField label="Acquisition Date" source="acquisitionDate" />
            <TextField label="Amount Per Term" source="amountPerTerm" />
            <TextField label="Business Entity" source="businessEntity" />
            <TextField label="Categories" source="categories" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Custom Service Name" source="customServiceName" />
            <TextField label="Expense Date" source="expenseDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Series" source="isSeries" />
            <ReferenceField label="Manager" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Notes" source="notes" />
            <BooleanField label="One Time Only" source="oneTimeOnly" />
            <ReferenceField
              label="Series"
              source="cashflowcontract.id"
              reference="CashflowContract"
            >
              <TextField source={CASHFLOWCONTRACT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Service Name" source="serviceName" />
            <TextField label="Term" source="term" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
