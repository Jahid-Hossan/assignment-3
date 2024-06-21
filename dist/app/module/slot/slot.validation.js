"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotValidation = void 0;
const zod_1 = require("zod");
const createSlotSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        room: zod_1.z.string(),
        date: zod_1.z.string(),
        startTime: zod_1.z.string(),
        endTime: zod_1.z.string(),
        isBooked: zod_1.z.boolean().optional(),
    }),
});
exports.slotValidation = {
    createSlotSchemaValidation,
};
