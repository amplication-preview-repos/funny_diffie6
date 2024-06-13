import { Order } from "../order/Order";
import { PaymentTransaction } from "../paymentTransaction/PaymentTransaction";
import { User } from "../user/User";

export type Bill = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  orders?: Array<Order>;
  paymentTransactions?: Array<PaymentTransaction>;
  qrCode: string | null;
  updatedAt: Date;
  user?: User | null;
};
