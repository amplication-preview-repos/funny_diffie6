import { PaymentTransaction as TPaymentTransaction } from "../api/paymentTransaction/PaymentTransaction";

export const PAYMENTTRANSACTION_TITLE_FIELD = "id";

export const PaymentTransactionTitle = (
  record: TPaymentTransaction
): string => {
  return record.id?.toString() || String(record.id);
};
