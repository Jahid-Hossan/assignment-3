"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingModel = void 0;
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    date: {
        type: String,
        required: true,
    },
    slots: {
        type: [mongoose_1.Schema.Types.ObjectId],
        required: true,
    },
    room: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    totalAmount: {
        type: Number,
    },
    isConfirmed: {
        type: String,
        enum: ["unconfirmed", "confirmed"],
        default: "unconfirmed",
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
exports.BookingModel = (0, mongoose_1.model)("Booking", bookingSchema);
