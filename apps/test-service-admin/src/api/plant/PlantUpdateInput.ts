import { DeviceUpdateManyWithoutPlantsInput } from "./DeviceUpdateManyWithoutPlantsInput";

export type PlantUpdateInput = {
  devices?: DeviceUpdateManyWithoutPlantsInput;
  name?: string | null;
  refId?: string | null;
};
