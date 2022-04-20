import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ExpenseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
