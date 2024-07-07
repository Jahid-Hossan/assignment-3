import config from "../../config";
import { TLoginUser, TUser } from "./user.interface";
import { UserModel } from "./user.model";
import { createToken, isPasswordMatched } from "./user.utils";

const createUserIntoDB = async (payload: TUser) => {
  const result = await UserModel.create(payload);
  return result;
};

const loginUser = async (payload: TLoginUser) => {
  const user = await UserModel.findOne({ email: payload.email });

  // console.log(user);

  if (!user) {
    throw new Error("User does not exist");
  }

  if (!(await isPasswordMatched(payload?.password, user?.password))) {
    throw new Error("Password do not matched");
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );

  // console.log(delete user.password);
  const theUser = {
    _id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    address: user.address,
  };

  console.log(theUser);

  return {
    accessToken,
    refreshToken,
    theUser,
  };
};

export const UserServices = {
  createUserIntoDB,
  loginUser,
};
