import { Request, Response, response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  getCars,
  getCar,
  insertCar,
  updateCar,
  deleteCar,
} from "../services/item";

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send({ response });
  } catch (err) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCar(id);
    res.send(response);
  } catch (err) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertCar(body);
    res.send({ response });
  } catch (err) {
    handleHttp(res, "ERROR_POST_ITEM", err);
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateCar(id, body);

    res.send({ response });
  } catch (err) {
    handleHttp(res, "ERROR_UPDATE_ITEM", err);
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteCar(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (err) {
    handleHttp(res, "ERROR_DELETE_ITEM", err);
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
