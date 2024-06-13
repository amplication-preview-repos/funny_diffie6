import { BillCreateNestedManyWithoutUsersInput } from "./BillCreateNestedManyWithoutUsersInput";
import { PaymentMethodCreateNestedManyWithoutUsersInput } from "./PaymentMethodCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bills?: BillCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password: string;
  paymentMethods?: PaymentMethodCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
