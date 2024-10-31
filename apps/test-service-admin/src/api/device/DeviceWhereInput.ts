import { StringFilter } from "../../util/StringFilter";
import { PlantListRelationFilter } from "../plant/PlantListRelationFilter";

export type DeviceWhereInput = {
  id?: StringFilter;
  plant?: PlantListRelationFilter;
};
