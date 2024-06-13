import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PaymentTransactionTitle } from "../paymentTransaction/PaymentTransactionTitle";

export const TipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
