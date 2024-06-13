import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { PaymentTransactionListRelationFilter } from "../paymentTransaction/PaymentTransactionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BillWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  orders?: OrderListRelationFilter;
  paymentTransactions?: PaymentTransactionListRelationFilter;
  qrCode?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
