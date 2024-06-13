import { SortOrder } from "../../util/SortOrder";

export type BillOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  qrCode?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
