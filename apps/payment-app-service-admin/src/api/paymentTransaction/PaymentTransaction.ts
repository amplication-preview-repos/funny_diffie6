import { Bill } from "../bill/Bill";
import { Tip } from "../tip/Tip";

export type PaymentTransaction = {
  amount: number | null;
  bill?: Bill | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  tips?: Array<Tip>;
  updatedAt: Date;
};
