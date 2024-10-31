import { DeviceListRelationFilter } from "../device/DeviceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PlantWhereInput = {
  devices?: DeviceListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  refId?: StringNullableFilter;
};
