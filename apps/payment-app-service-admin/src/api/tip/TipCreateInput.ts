import { PaymentTransactionWhereUniqueInput } from "../paymentTransaction/PaymentTransactionWhereUniqueInput";

export type TipCreateInput = {
  amount?: number | null;
  paymentTransaction?: PaymentTransactionWhereUniqueInput | null;
};
