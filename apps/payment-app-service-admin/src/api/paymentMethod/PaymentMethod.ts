import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type PaymentMethod = {
  createdAt: Date;
  details: JsonValue;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
