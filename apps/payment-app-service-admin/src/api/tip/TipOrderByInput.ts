import { SortOrder } from "../../util/SortOrder";

export type TipOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentTransactionId?: SortOrder;
  updatedAt?: SortOrder;
};
