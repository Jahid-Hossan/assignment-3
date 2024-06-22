import catchAsync from "../Utils/catchAsync";
import { NextFunction, Response } from "express";
import { Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { UserModel } from "../module/User/user.model";
import { TUserRole } from "../module/User/user.interface";

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    // console.log(token);

    if (!token) {
      throw new Error("You are not authorized");
    }
    // console.log(token);

    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload;

    const { email, role } = decoded;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      throw new Error("User does not exist");
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new Error("You are not authorized");
    }

    req.user = decoded as JwtPayload & { role: string };
    next();
  });
};

export default auth;
