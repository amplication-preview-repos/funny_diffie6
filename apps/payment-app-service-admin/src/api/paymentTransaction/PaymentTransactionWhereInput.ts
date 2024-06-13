import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BillWhereUniqueInput } from "../bill/BillWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TipListRelationFilter } from "../tip/TipListRelationFilter";

export type PaymentTransactionWhereInput = {
  amount?: FloatNullableFilter;
  bill?: BillWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
  tips?: TipListRelationFilter;
};
