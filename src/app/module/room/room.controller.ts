import httpStatus from "http-status";
import sendResponse from "../../Utils/sendResponse";
import { RoomServices } from "./room.service";
import catchAsync from "../../Utils/catchAsync";

const createRoom = catchAsync(async (req, res) => {
  const roomData = req.body;

  const result = await RoomServices.createRoomIntoDB(roomData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Room is created successfully",
    data: result,
  });
});

const getARoom = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await RoomServices.getARoomFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Room retrieved successfully",
    data: result,
  });
});

const getAllRoom = catchAsync(async (req, res) => {
  const result = await RoomServices.getAllRoomFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Room retrieved successfully",
    data: result,
  });
});

const updateRoom = catchAsync(async (req, res) => {
  const { id } = req.params;
  // console.log(req.body);
  const result = await RoomServices.updateRoomIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Room updated successfully",
    data: result,
  });
});

const deleteRoom = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await RoomServices.deleteRoomFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Room updated successfully",
    data: result,
  });
});

export const RoomControllers = {
  createRoom,
  getARoom,
  getAllRoom,
  updateRoom,
  deleteRoom,
};
