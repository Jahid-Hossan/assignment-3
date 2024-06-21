import { z } from "zod";

const createBookingSchemaValidation = z.object({
  body: z.object({
    date: z.string(),
    slots: z.array(z.string()),
    room: z.string(),
    user: z.string(),
    // totalAmount: z.number().optional(),
    // isConfirmed: z.enum(["unconfirmed", "confirmed"]),
    // isDeleted: z.boolean(),
  }),
});

const updateBookingSchemaValidation = z.object({
  body: z.object({
    date: z.string().optional(),
    slots: z.array(z.string()).optional(),
    room: z.string().optional(),
    user: z.string().optional(),
    totalAmount: z.number().optional(),
    isConfirmed: z.enum(["unconfirmed", "confirmed"]).optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const bookingValidations = {
  createBookingSchemaValidation,
  updateBookingSchemaValidation,
};
