import { Router } from "express";
import { CreateCityController } from "../modules/cities/useCases/CreateCityController";

export const cityRouter = Router();

const createCityController = new CreateCityController();

cityRouter.post("/", createCityController.handle);
