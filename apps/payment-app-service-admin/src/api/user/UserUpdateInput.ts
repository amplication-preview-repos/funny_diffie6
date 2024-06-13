import { BillUpdateManyWithoutUsersInput } from "./BillUpdateManyWithoutUsersInput";
import { PaymentMethodUpdateManyWithoutUsersInput } from "./PaymentMethodUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bills?: BillUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  paymentMethods?: PaymentMethodUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
