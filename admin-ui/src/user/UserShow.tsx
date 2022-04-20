import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Expense"
          target="UserId"
          label="Expenses"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <TextField label="Approval" source="approval" />
            <ReferenceField label="Approver" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Business Entity" source="businessEntity" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <TextField label="Paid" source="paid" />
            <TextField label="Purchase Date" source="purchaseDate" />
            <ReferenceField label="Requester" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Expense"
          target="UserId"
          label="Expenses"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <TextField label="Approval" source="approval" />
            <ReferenceField label="Approver" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Business Entity" source="businessEntity" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <TextField label="Paid" source="paid" />
            <TextField label="Purchase Date" source="purchaseDate" />
            <ReferenceField label="Requester" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
