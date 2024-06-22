import httpStatus from "http-status";
import catchAsync from "../../Utils/catchAsync";
import sendResponse from "../../Utils/sendResponse";
import { SlotServices } from "./slot.service";

const createSlot = catchAsync(async (req, res) => {
  const slotData = req.body;

  const result = await SlotServices.createSlotIntoDB(slotData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slots is created successfully",
    data: result,
  });
});

const getSlot = catchAsync(async (req, res) => {
  // console.log(req.headers.date);

  const result = await SlotServices.getslot(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Available slots retrieved successfully",
    data: result,
  });
});

export const SlotControllers = {
  createSlot,
  getSlot,
};
