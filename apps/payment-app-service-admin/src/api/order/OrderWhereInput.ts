import { BillWhereUniqueInput } from "../bill/BillWhereUniqueInput";
import { BillListRelationFilter } from "../bill/BillListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type OrderWhereInput = {
  bill?: BillWhereUniqueInput;
  bills?: BillListRelationFilter;
  id?: StringFilter;
  items?: JsonFilter;
  prices?: JsonFilter;
};
