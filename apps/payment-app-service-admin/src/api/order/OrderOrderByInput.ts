import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  billId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  items?: SortOrder;
  prices?: SortOrder;
  updatedAt?: SortOrder;
};
