import { BillWhereUniqueInput } from "../bill/BillWhereUniqueInput";
import { BillUpdateManyWithoutOrdersInput } from "./BillUpdateManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";

export type OrderUpdateInput = {
  bill?: BillWhereUniqueInput | null;
  bills?: BillUpdateManyWithoutOrdersInput;
  items?: InputJsonValue;
  prices?: InputJsonValue;
};
