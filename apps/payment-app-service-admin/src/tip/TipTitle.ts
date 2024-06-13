import { Tip as TTip } from "../api/tip/Tip";

export const TIP_TITLE_FIELD = "id";

export const TipTitle = (record: TTip): string => {
  return record.id?.toString() || String(record.id);
};
