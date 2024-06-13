import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BILL_TITLE_FIELD } from "../bill/BillTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Bill" source="bill.id" reference="Bill">
          <TextField source={BILL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="items" source="items" />
        <TextField label="prices" source="prices" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
