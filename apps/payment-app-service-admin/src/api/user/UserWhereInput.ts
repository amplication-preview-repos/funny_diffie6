import { BillListRelationFilter } from "../bill/BillListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentMethodListRelationFilter } from "../paymentMethod/PaymentMethodListRelationFilter";

export type UserWhereInput = {
  bills?: BillListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  paymentMethods?: PaymentMethodListRelationFilter;
  username?: StringFilter;
};
