"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingValidations = void 0;
const zod_1 = require("zod");
const createBookingSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        date: zod_1.z.string(),
        slots: zod_1.z.array(zod_1.z.string()),
        room: zod_1.z.string(),
        user: zod_1.z.string(),
        // totalAmount: z.number().optional(),
        // isConfirmed: z.enum(["unconfirmed", "confirmed"]),
        // isDeleted: z.boolean(),
    }),
});
const updateBookingSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        date: zod_1.z.string().optional(),
        slots: zod_1.z.array(zod_1.z.string()).optional(),
        room: zod_1.z.string().optional(),
        user: zod_1.z.string().optional(),
        totalAmount: zod_1.z.number().optional(),
        isConfirmed: zod_1.z.enum(["unconfirmed", "confirmed"]).optional(),
        isDeleted: zod_1.z.boolean().optional(),
    }),
});
exports.bookingValidations = {
    createBookingSchemaValidation,
    updateBookingSchemaValidation,
};
