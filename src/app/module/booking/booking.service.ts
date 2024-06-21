import { RoomModel } from "../room/room.model";
import { TBooking } from "./booking.interface";
import { BookingModel } from "./booking.model";

const createBookingIntoDB = async (payload: TBooking) => {
  const room: any = await RoomModel.findById(payload.room);

  payload.totalAmount = room.pricePerSlot * payload.slots.length;

  console.log(payload);

  const result = await BookingModel.create(payload);
  return result;
};

const getABookingFromDB = async (id: string) => {
  const result = await BookingModel.findById(id)
    .populate("slots")
    .populate("room")
    .populate("user");
  return result;
};

const getAllBookingFromDB = async () => {
  const result = await BookingModel.find()
    .populate("slots")
    .populate("room")
    .populate("user");
  return result;
};

const updateBookingIntoDB = async (id: string, ) => {
  const result = await BookingModel.findByIdAndUpdate(
    id,
    { isConfirmed: "confirmed" },
    {
      new: true,
      runValidators: true,
    }
  );
  return result;
};

const deleteBookingFromDB = async (id: string) => {
  const result = await BookingModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
      runValidators: true,
    }
  );
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getABookingFromDB,
  getAllBookingFromDB,
  updateBookingIntoDB,
  deleteBookingFromDB,
};
