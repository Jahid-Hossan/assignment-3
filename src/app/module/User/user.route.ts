import express from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../middleware/ValidateRequest";
import { userValidation } from "./user.validation";

const router = express.Router();

router.post("/signup", UserControllers.createUser);

router.post(
  "/login",

  validateRequest(userValidation.loginValidationSchema),
  UserControllers.loginUser
);

export const UserRoutes = router;
