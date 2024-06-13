import { SortOrder } from "../../util/SortOrder";

export type PaymentMethodOrderByInput = {
  createdAt?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
