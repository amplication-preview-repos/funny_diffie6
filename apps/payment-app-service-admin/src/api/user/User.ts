import { Bill } from "../bill/Bill";
import { PaymentMethod } from "../paymentMethod/PaymentMethod";
import { JsonValue } from "type-fest";

export type User = {
  bills?: Array<Bill>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  paymentMethods?: Array<PaymentMethod>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
