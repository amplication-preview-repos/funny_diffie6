import { BillWhereUniqueInput } from "../bill/BillWhereUniqueInput";
import { TipCreateNestedManyWithoutPaymentTransactionsInput } from "./TipCreateNestedManyWithoutPaymentTransactionsInput";

export type PaymentTransactionCreateInput = {
  amount?: number | null;
  bill?: BillWhereUniqueInput | null;
  status?: "Option1" | null;
  tips?: TipCreateNestedManyWithoutPaymentTransactionsInput;
};
