import express from "express";
import validateRequest from "../../middleware/ValidateRequest";
import auth from "../../middleware/auth";
import { bookingValidations } from "./booking.validation";
import { BookingControllers } from "./booking.controller";
import { USER_ROLE } from "../User/user.constant";

const router = express.Router();

router.post(
  "/",
  validateRequest(bookingValidations.createBookingSchemaValidation),
  BookingControllers.createBooking
);
router.patch(
  "/:id",
  auth(USER_ROLE.admin),
  validateRequest(bookingValidations.updateBookingSchemaValidation),
  BookingControllers.updateBooking
);
router.delete("/:id", auth(USER_ROLE.admin), BookingControllers.deleteBooking);

router.get("/:id", BookingControllers.getABooking);
router.get("/", auth(USER_ROLE.admin), BookingControllers.getAllBooking);
router.get("/", auth(USER_ROLE.user), BookingControllers.getMyBooking);

export const BookingRoutes = router;
