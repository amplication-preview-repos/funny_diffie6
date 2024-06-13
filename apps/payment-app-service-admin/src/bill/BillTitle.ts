import { Bill as TBill } from "../api/bill/Bill";

export const BILL_TITLE_FIELD = "qrCode";

export const BillTitle = (record: TBill): string => {
  return record.qrCode?.toString() || String(record.id);
};
