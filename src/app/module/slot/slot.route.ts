import express from "express";
import { SlotControllers } from "./slot.controller";
import validateRequest from "../../middleware/ValidateRequest";
import { slotValidation } from "./slot.validation";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../User/user.constant";
const router = express.Router();

router.post(
  "/",
  auth(USER_ROLE.admin),
  validateRequest(slotValidation.createSlotSchemaValidation),
  SlotControllers.createSlot
);

router.get("/availability", SlotControllers.getSlot);

export const SlotRoutes = router;
