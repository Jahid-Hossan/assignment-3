import { Router } from "express";
import { UserRoutes } from "../module/User/user.route";
import { RoomRoutes } from "../module/room/room.route";
import { SlotRoutes } from "../module/slot/slot.route";
import { BookingRoutes } from "../module/booking/booking.router";
import { MyBookingRoutes } from "../module/booking/myBooking.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/rooms",
    route: RoomRoutes,
  },
  {
    path: "/slots",
    route: SlotRoutes,
  },
  {
    path: "/bookings",
    route: BookingRoutes,
  },
  {
    path: "/my-bookings",
    route: MyBookingRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
