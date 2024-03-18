import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/request.interface";

const getItems = async (req: RequestExt, res: Response) => {
  try {
    res.send({ data: "SOLO_PERSONAS_AUTORIZADA", user: req.user });
  } catch (err) {
    handleHttp(res, "ERROR_GET_ITEMS", 500, err);
  }
};

export { getItems };
