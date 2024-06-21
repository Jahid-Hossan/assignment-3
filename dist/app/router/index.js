"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../module/User/user.route");
const room_route_1 = require("../module/room/room.route");
const slot_route_1 = require("../module/slot/slot.route");
const booking_router_1 = require("../module/booking/booking.router");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/rooms",
        route: room_route_1.RoomRoutes,
    },
    {
        path: "/slots",
        route: slot_route_1.SlotRoutes,
    },
    {
        path: "/bookings",
        route: booking_router_1.BookingRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
