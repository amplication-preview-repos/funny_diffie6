import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BillTitle } from "../bill/BillTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="bill.id" reference="Bill" label="Bill">
          <SelectInput optionText={BillTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="bills"
          reference="Bill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BillTitle} />
        </ReferenceArrayInput>
        <div />
        <div />
      </SimpleForm>
    </Edit>
  );
};
