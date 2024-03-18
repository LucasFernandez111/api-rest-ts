import { NextFunction, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/request.interface";

const checkSession = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || null;
    const jwt = jwtByUser?.split(" ").pop();

    const isUser = verifyToken(`${jwt}`); //Asegurando String

    if (!isUser) {
      res.status(401).send("NO_TIENES_UN_JWT_VALIDO!");
    } else {
      req.user = isUser;
      next();
    }
  } catch (err) {
    handleHttp(res, "SESSION_NOT_VALID", 400);
  }
};

export { checkSession };
