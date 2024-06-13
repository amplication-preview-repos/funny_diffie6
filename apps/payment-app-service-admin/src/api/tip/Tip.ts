import { PaymentTransaction } from "../paymentTransaction/PaymentTransaction";

export type Tip = {
  amount: number | null;
  createdAt: Date;
  id: string;
  paymentTransaction?: PaymentTransaction | null;
  updatedAt: Date;
};
