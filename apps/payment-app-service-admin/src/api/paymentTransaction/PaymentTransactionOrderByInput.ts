import { SortOrder } from "../../util/SortOrder";

export type PaymentTransactionOrderByInput = {
  amount?: SortOrder;
  billId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
