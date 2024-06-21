import { TRoom } from "./room.interface";
import { RoomModel } from "./room.model";

const createRoomIntoDB = async (payload: TRoom) => {
  const result = await RoomModel.create(payload);
  return result;
};

const getARoomFromDB = async (id: string) => {
  const result = await RoomModel.findById(id);
  return result;
};

const getAllRoomFromDB = async () => {
  const result = await RoomModel.find();
  return result;
};

const updateRoomIntoDB = async (id: string, payload: Partial<TRoom>) => {
  const result = await RoomModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteRoomFromDB = async (id: string) => {
  const result = await RoomModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
      runValidators: true,
    }
  );
  return result;
};

export const RoomServices = {
  createRoomIntoDB,
  getARoomFromDB,
  getAllRoomFromDB,
  updateRoomIntoDB,
  deleteRoomFromDB,
};
