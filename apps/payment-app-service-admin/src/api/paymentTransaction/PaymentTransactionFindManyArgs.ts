import { PaymentTransactionWhereInput } from "./PaymentTransactionWhereInput";
import { PaymentTransactionOrderByInput } from "./PaymentTransactionOrderByInput";

export type PaymentTransactionFindManyArgs = {
  where?: PaymentTransactionWhereInput;
  orderBy?: Array<PaymentTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
