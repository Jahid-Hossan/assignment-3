import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>(
  {
    date: {
      type: String,
      required: true,
    },
    slots: {
      type: [Schema.Types.ObjectId],
      required: true,
      ref: "Slot",
    },
    room: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Room",
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
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
  },
  {
    timestamps: true,
  }
);

export const BookingModel = model<TBooking>("Booking", bookingSchema);
