import ItemModel from "../models/item";
import { Car } from "../interfaces/car.interface";

const insertCar = async (item: Car) => {
  const responseCar = await ItemModel.create(item);

  return responseCar;
};

const getCars = async () => {
  const responseCars = await ItemModel.find({});

  return responseCars;
};

const getCar = async (id: string) => {
  const response = await ItemModel.findOne({ _id: id });

  return response;
};

const updateCar = async (id: string, data: Car) => {
  const response = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true, //Retorna el elemento actualizado
  });

  return response;
};

const deleteCar = async (id: string) => {
  const response = await ItemModel.deleteOne({ _id: id });

  return response;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
