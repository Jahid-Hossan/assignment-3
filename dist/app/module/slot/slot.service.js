"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotServices = void 0;
const slot_model_1 = require("./slot.model");
const createSlotIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
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
    const result = yield slot_model_1.SlotModel.create(slots);
    return result;
});
const getslot = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    if (data.date) {
        query.date = data.date;
    }
    if (data.roomId) {
        query.room = data.roomId;
    }
    const date = data === null || data === void 0 ? void 0 : data.date;
    const roomId = data === null || data === void 0 ? void 0 : data.roomId;
    console.log(date, roomId);
    const result = yield slot_model_1.SlotModel.find(query).populate("room");
    return result;
});
exports.SlotServices = {
    createSlotIntoDB,
    getslot,
};
