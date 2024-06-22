import { TSlot } from "./slot.interface";
import { SlotModel } from "./slot.model";

const createSlotIntoDB = async (payload: TSlot) => {
  const durationPerSlot = 60;

  const startTime = payload.startTime.split(":").map(Number);
  const startTimeInMint = startTime[0] * 60;
  const endTime = payload.endTime.split(":").map(Number);
  const endTimeInMint = endTime[0] * 60;

  const totalDuration = endTimeInMint - startTimeInMint;

  const numberOfSlot = totalDuration / durationPerSlot;

  let slots = [];

  for (let i = 0; i < numberOfSlot; i++) {
    const setSlotStartTime = startTime[0] + i;
    const setSlotEndTime = startTime[0] + i + 1;

    const slotStartTime = `${setSlotStartTime
      .toString()
      .padStart(2, "0")}:${startTime[1].toString().padStart(2, "0")}`;

    const slotEndTime = `${setSlotEndTime
      .toString()
      .padStart(2, "0")}:${endTime[1].toString().padStart(2, "0")}`;

    const slot = {
      room: payload.room,
      date: payload.date,
      startTime: slotStartTime,
      endTime: slotEndTime,
      isBooked: false,
    };
    slots.push(slot);
  }

  const result = await SlotModel.create(slots);
  return result;
};

const getslot = async (data: Record<string, unknown>) => {
  const query: Record<string, any> = {};
  if (data.date) {
    query.date = data.date;
  }
  if (data.roomId) {
    query.room = data.roomId;
  }

  const date = data?.date;
  const roomId = data?.roomId;
  // console.log(date, roomId);

  const result = await SlotModel.find(query).populate("room");
  return result;
};

export const SlotServices = {
  createSlotIntoDB,
  getslot,
};
