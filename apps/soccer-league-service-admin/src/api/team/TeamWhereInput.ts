import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TeamWhereInput = {
  country?: StringNullableFilter;
  foundedYear?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  stadium?: StringNullableFilter;
};
