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
exports.BookingServices = void 0;
const room_model_1 = require("../room/room.model");
const booking_model_1 = require("./booking.model");
const createBookingIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const room = yield room_model_1.RoomModel.findById(payload.room);
    payload.totalAmount = room.pricePerSlot * payload.slots.length;
    console.log(payload);
    const result = yield booking_model_1.BookingModel.create(payload);
    return result;
});
const getABookingFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.BookingModel.findById(id)
        .populate("slots")
        .populate("room")
        .populate("user");
    return result;
});
const getAllBookingFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.BookingModel.find()
        .populate("slots")
        .populate("room")
        .populate("user");
    return result;
});
const updateBookingIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.BookingModel.findByIdAndUpdate(id, { isConfirmed: "confirmed" }, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteBookingFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.BookingModel.findByIdAndUpdate(id, { isDeleted: true }, {
        new: true,
        runValidators: true,
    });
    return result;
});
exports.BookingServices = {
    createBookingIntoDB,
    getABookingFromDB,
    getAllBookingFromDB,
    updateBookingIntoDB,
    deleteBookingFromDB,
};
