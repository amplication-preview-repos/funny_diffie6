import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentMethodCreateInput = {
  details?: InputJsonValue;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
