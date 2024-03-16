import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/user";

const registerNewUser = async ({ name, email, password }: User) => {
  const checkUser = await UserModel.findOne({ email });

  if (checkUser) return "ALREADY_USER";

  const registerNewUser = await UserModel.create({ name, email, password });

  return registerNewUser;
};

const loginUser = () => {};

export { loginUser, registerNewUser };
