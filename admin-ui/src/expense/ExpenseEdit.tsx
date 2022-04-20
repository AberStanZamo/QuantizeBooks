import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const ExpenseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <DateTimeInput label="Approval" source="approval" />
        <ReferenceInput source="user.id" reference="User" label="Approver">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
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
        <TextInput label="Notes" multiline source="notes" />
        <DateTimeInput label="Paid" source="paid" />
        <DateTimeInput label="Purchase Date" source="purchaseDate" />
        <ReferenceInput source="user.id" reference="User" label="Requester">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
