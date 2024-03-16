import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await registerNewUser(body);
  } catch (err) {}
};

const loginCtrl = async (req: Request, res: Response) => {
  try {
  } catch (err) {}
};

export { loginCtrl, registerCtrl };
