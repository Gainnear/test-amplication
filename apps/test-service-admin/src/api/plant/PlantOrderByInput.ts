import { SortOrder } from "../../util/SortOrder";

export type PlantOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  refId?: SortOrder;
  updatedAt?: SortOrder;
};
