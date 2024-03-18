import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);

  res.send({ responseUser });
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const responseAuth = await loginUser(body);

  if (responseAuth === "PASSWORD_INCORRECT") {
    return res.status(403).send(responseAuth);
  }

  res.send({ responseAuth });
};

export { loginCtrl, registerCtrl };
