"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRoutes = void 0;
const express_1 = __importDefault(require("express"));
const room_controller_1 = require("./room.controller");
const ValidateRequest_1 = __importDefault(require("../../middleware/ValidateRequest"));
const room_validation_1 = require("./room.validation");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_constant_1 = require("../User/user.constant");
const router = express_1.default.Router();
router.post("/", (0, auth_1.default)(user_constant_1.USER_ROLE.admin), (0, ValidateRequest_1.default)(room_validation_1.roomValidations.createRoomSchemaValidation), room_controller_1.RoomControllers.createRoom);
router.patch("/:id", (0, auth_1.default)(user_constant_1.USER_ROLE.admin), (0, ValidateRequest_1.default)(room_validation_1.roomValidations.updateRoomSchemaValidation), room_controller_1.RoomControllers.updateRoom);
router.delete("/:id", (0, auth_1.default)(user_constant_1.USER_ROLE.admin), room_controller_1.RoomControllers.deleteRoom);
router.get("/:id", room_controller_1.RoomControllers.getARoom);
router.get("/", room_controller_1.RoomControllers.getAllRoom);
exports.RoomRoutes = router;
