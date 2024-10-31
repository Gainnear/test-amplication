import { PlantCreateNestedManyWithoutDevicesInput } from "./PlantCreateNestedManyWithoutDevicesInput";

export type DeviceCreateInput = {
  plant?: PlantCreateNestedManyWithoutDevicesInput;
};
