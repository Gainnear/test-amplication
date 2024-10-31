import { Plant } from "../plant/Plant";

export type Device = {
  createdAt: Date;
  id: string;
  plant?: Array<Plant>;
  updatedAt: Date;
};
