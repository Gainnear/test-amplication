import { Device } from "../device/Device";

export type Plant = {
  createdAt: Date;
  devices?: Array<Device>;
  id: string;
  name: string | null;
  refId: string | null;
  updatedAt: Date;
};
