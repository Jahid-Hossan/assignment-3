import httpStatus from "http-status";
import catchAsync from "../../Utils/catchAsync";
import sendResponse from "../../Utils/sendResponse";
import { UserServices } from "./user.service";
import config from "../../config";

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;

  const result = await UserServices.createUserIntoDB(userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is created successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  // console.log(req.body);

  const result = await UserServices.loginUser(req.body);
  const { refreshToken, accessToken, theUser } = result;

  res.cookie("refreshToken", refreshToken, {
    secure: config.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is logged in successfully!",
    token: accessToken,
    data: theUser,
  });
});

export const UserControllers = {
  createUser,
  loginUser,
};
