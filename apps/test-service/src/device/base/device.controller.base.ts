/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DeviceService } from "../device.service";
import { DeviceCreateInput } from "./DeviceCreateInput";
import { Device } from "./Device";
import { DeviceFindManyArgs } from "./DeviceFindManyArgs";
import { DeviceWhereUniqueInput } from "./DeviceWhereUniqueInput";
import { DeviceUpdateInput } from "./DeviceUpdateInput";
import { PlantFindManyArgs } from "../../plant/base/PlantFindManyArgs";
import { Plant } from "../../plant/base/Plant";
import { PlantWhereUniqueInput } from "../../plant/base/PlantWhereUniqueInput";

export class DeviceControllerBase {
  constructor(protected readonly service: DeviceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Device })
  async createDevice(@common.Body() data: DeviceCreateInput): Promise<Device> {
    return await this.service.createDevice({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Device] })
  @ApiNestedQuery(DeviceFindManyArgs)
  async devices(@common.Req() request: Request): Promise<Device[]> {
    const args = plainToClass(DeviceFindManyArgs, request.query);
    return this.service.devices({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Device })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async device(
    @common.Param() params: DeviceWhereUniqueInput
  ): Promise<Device | null> {
    const result = await this.service.device({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Device })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDevice(
    @common.Param() params: DeviceWhereUniqueInput,
    @common.Body() data: DeviceUpdateInput
  ): Promise<Device | null> {
    try {
      return await this.service.updateDevice({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Device })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDevice(
    @common.Param() params: DeviceWhereUniqueInput
  ): Promise<Device | null> {
    try {
      return await this.service.deleteDevice({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/plant")
  @ApiNestedQuery(PlantFindManyArgs)
  async findPlant(
    @common.Req() request: Request,
    @common.Param() params: DeviceWhereUniqueInput
  ): Promise<Plant[]> {
    const query = plainToClass(PlantFindManyArgs, request.query);
    const results = await this.service.findPlant(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,
        refId: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/plant")
  async connectPlant(
    @common.Param() params: DeviceWhereUniqueInput,
    @common.Body() body: PlantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      plant: {
        connect: body,
      },
    };
    await this.service.updateDevice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/plant")
  async updatePlant(
    @common.Param() params: DeviceWhereUniqueInput,
    @common.Body() body: PlantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      plant: {
        set: body,
      },
    };
    await this.service.updateDevice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/plant")
  async disconnectPlant(
    @common.Param() params: DeviceWhereUniqueInput,
    @common.Body() body: PlantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      plant: {
        disconnect: body,
      },
    };
    await this.service.updateDevice({
      where: params,
      data,
      select: { id: true },
    });
  }
}
