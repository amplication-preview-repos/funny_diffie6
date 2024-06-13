import { PaymentTransactionWhereUniqueInput } from "../paymentTransaction/PaymentTransactionWhereUniqueInput";

export type TipUpdateInput = {
  amount?: number | null;
  paymentTransaction?: PaymentTransactionWhereUniqueInput | null;
};
