import { Router } from "express";
import { UserRoutes } from "../module/User/user.route";
import { RoomRoutes } from "../module/room/room.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;