import express from "express";
import validateRequest from "../../middleware/ValidateRequest";
import auth from "../../middleware/auth";
import { bookingValidations } from "./booking.validation";
import { BookingControllers } from "./booking.controller";
import { USER_ROLE } from "../User/user.constant";

const router = express.Router();

router.get("/", auth(USER_ROLE.user), BookingControllers.getMyBooking);

export const MyBookingRoutes = router;
