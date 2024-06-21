import express from "express";
import { RoomControllers } from "./room.controller";
import validateRequest from "../../middleware/ValidateRequest";
import { roomValidations } from "./room.validation";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../User/user.constant";

const router = express.Router();

router.post(
  "/",
  auth(USER_ROLE.admin),
  validateRequest(roomValidations.createRoomSchemaValidation),
  RoomControllers.createRoom
);
router.patch(
  "/:id",
  auth(USER_ROLE.admin),
  validateRequest(roomValidations.updateRoomSchemaValidation),
  RoomControllers.updateRoom
);
router.delete("/:id", auth(USER_ROLE.admin), RoomControllers.deleteRoom);

router.get("/:id", RoomControllers.getARoom);
router.get("/", RoomControllers.getAllRoom);

export const RoomRoutes = router;
