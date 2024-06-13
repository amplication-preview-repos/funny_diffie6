import { BillWhereUniqueInput } from "../bill/BillWhereUniqueInput";
import { BillCreateNestedManyWithoutOrdersInput } from "./BillCreateNestedManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";

export type OrderCreateInput = {
  bill?: BillWhereUniqueInput | null;
  bills?: BillCreateNestedManyWithoutOrdersInput;
  items?: InputJsonValue;
  prices?: InputJsonValue;
};
