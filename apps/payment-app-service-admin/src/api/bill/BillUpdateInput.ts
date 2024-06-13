import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { OrderUpdateManyWithoutBillsInput } from "./OrderUpdateManyWithoutBillsInput";
import { PaymentTransactionUpdateManyWithoutBillsInput } from "./PaymentTransactionUpdateManyWithoutBillsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BillUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutBillsInput;
  paymentTransactions?: PaymentTransactionUpdateManyWithoutBillsInput;
  qrCode?: string | null;
  user?: UserWhereUniqueInput | null;
};
