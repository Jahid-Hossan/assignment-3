"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotRoutes = void 0;
const express_1 = __importDefault(require("express"));
const slot_controller_1 = require("./slot.controller");
const ValidateRequest_1 = __importDefault(require("../../middleware/ValidateRequest"));
const slot_validation_1 = require("./slot.validation");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_constant_1 = require("../User/user.constant");
const router = express_1.default.Router();
router.post("/", (0, auth_1.default)(user_constant_1.USER_ROLE.admin), (0, ValidateRequest_1.default)(slot_validation_1.slotValidation.createSlotSchemaValidation), slot_controller_1.SlotControllers.createSlot);
router.get("/availability", slot_controller_1.SlotControllers.getSlot);
exports.SlotRoutes = router;
