import { Bill } from "../bill/Bill";
import { JsonValue } from "type-fest";

export type Order = {
  bill?: Bill | null;
  bills?: Array<Bill>;
  createdAt: Date;
  id: string;
  items: JsonValue;
  prices: JsonValue;
  updatedAt: Date;
};
