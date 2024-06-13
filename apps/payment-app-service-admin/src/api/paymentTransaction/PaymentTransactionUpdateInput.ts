import { BillWhereUniqueInput } from "../bill/BillWhereUniqueInput";
import { TipUpdateManyWithoutPaymentTransactionsInput } from "./TipUpdateManyWithoutPaymentTransactionsInput";

export type PaymentTransactionUpdateInput = {
  amount?: number | null;
  bill?: BillWhereUniqueInput | null;
  status?: "Option1" | null;
  tips?: TipUpdateManyWithoutPaymentTransactionsInput;
};
