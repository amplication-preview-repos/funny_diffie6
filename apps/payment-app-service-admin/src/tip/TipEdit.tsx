import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PaymentTransactionTitle } from "../paymentTransaction/PaymentTransactionTitle";

export const TipEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="paymentTransaction.id"
          reference="PaymentTransaction"
          label="PaymentTransaction"
        >
          <SelectInput optionText={PaymentTransactionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
