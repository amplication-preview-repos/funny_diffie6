import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentTransactionWhereUniqueInput } from "../paymentTransaction/PaymentTransactionWhereUniqueInput";

export type TipWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  paymentTransaction?: PaymentTransactionWhereUniqueInput;
};
