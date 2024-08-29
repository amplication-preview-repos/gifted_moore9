import { SortOrder } from "../../util/SortOrder";

export type TeamOrderByInput = {
  country?: SortOrder;
  createdAt?: SortOrder;
  foundedYear?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  stadium?: SortOrder;
  updatedAt?: SortOrder;
};
