import express from "express";
import { RoomControllers } from "./room.controller";
import validateRequest from "../../middleware/ValidateRequest";
import { roomValidations } from "./room.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(roomValidations.createRoomSchemaValidation),
  RoomControllers.createRoom
);
router.patch(
  "/:id",
  validateRequest(roomValidations.updateRoomSchemaValidation),
  RoomControllers.updateRoom
);
router.delete("/:id", RoomControllers.deleteRoom);

router.get("/:id", RoomControllers.getARoom);
router.get("/", RoomControllers.getAllRoom);

export const RoomRoutes = router;
