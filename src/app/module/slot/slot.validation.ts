import { z } from "zod";

const createSlotSchemaValidation = z.object({
  body: z.object({
    room: z.string(),
    date: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    isBooked: z.boolean().optional(),
  }),
});

export const slotValidation = {
  createSlotSchemaValidation,
};
