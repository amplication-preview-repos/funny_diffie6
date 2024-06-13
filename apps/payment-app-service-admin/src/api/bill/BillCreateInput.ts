import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { OrderCreateNestedManyWithoutBillsInput } from "./OrderCreateNestedManyWithoutBillsInput";
import { PaymentTransactionCreateNestedManyWithoutBillsInput } from "./PaymentTransactionCreateNestedManyWithoutBillsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BillCreateInput = {
  order?: OrderWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutBillsInput;
  paymentTransactions?: PaymentTransactionCreateNestedManyWithoutBillsInput;
  qrCode?: string | null;
  user?: UserWhereUniqueInput | null;
};
