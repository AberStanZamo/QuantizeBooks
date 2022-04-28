import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CASHFLOWCONTRACT_TITLE_FIELD } from "./CashflowContractTitle";

export const CashflowContractList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Cashflow Contracts"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
