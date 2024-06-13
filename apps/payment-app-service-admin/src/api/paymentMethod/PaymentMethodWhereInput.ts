import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentMethodWhereInput = {
  details?: JsonFilter;
  id?: StringFilter;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
