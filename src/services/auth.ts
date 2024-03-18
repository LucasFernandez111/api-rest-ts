import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/user";
import { encrypt, verifyPass } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({
  name,
  email,
  password,
}: User): Promise<string | object> => {
  const checkUser = await UserModel.findOne({ email });

  if (checkUser) return "ALREADY_USER";

  const passHash = await encrypt(password);

  const registerNewUser = await UserModel.create({
    name,
    email,
    password: passHash,
  });

  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkUser = await UserModel.findOne({ email });

  if (!checkUser) return "NOT_FOUND_USER";

  const passwordHash = checkUser.password;

  const isCorrect = await verifyPass(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const jwt = generateToken(email);

  const data = {
    toke: jwt,
    user: checkUser,
  };
  return data;
};

export { loginUser, registerNewUser };
