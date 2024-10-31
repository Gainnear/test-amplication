import { DeviceCreateNestedManyWithoutPlantsInput } from "./DeviceCreateNestedManyWithoutPlantsInput";

export type PlantCreateInput = {
  devices?: DeviceCreateNestedManyWithoutPlantsInput;
  name?: string | null;
  refId?: string | null;
};
