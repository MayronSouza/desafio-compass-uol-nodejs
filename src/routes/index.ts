import { Router } from "express";

import { CreateCityController } from "../modules/cities/useCases/createCity/CreateCityController";
import { FindCityByNameController } from "../modules/cities/useCases/findByName/FindCityByNameController";
import { FindCityByStateController } from "../modules/cities/useCases/findByState/FindCityByStateController";

import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";
import { FindClientByNameController } from "../modules/clients/useCases/findByName/FindClientByNameController";
import { FindClientByIdController } from "../modules/clients/useCases/findById/FindClientByIdController";
import { RemoveClientController } from "../modules/clients/useCases/removeClient/RemoveClientController";
import { FindClientsCotroller } from "../modules/clients/useCases/find/FindClientsController";
import { UpdateClientByNameController } from "../modules/clients/useCases/updateNameClient/UpdateClientByNameController";

export const router = Router();

const createCityController = new CreateCityController();
const findCityByNameController = new FindCityByNameController();
const findCityByStateController = new FindCityByStateController();

const createClientController = new CreateClientController();
const findClientsController = new FindClientsCotroller();
const findClientByNameController = new FindClientByNameController();
const findClientByIdController = new FindClientByIdController();
const removeClientController = new RemoveClientController();
const updateClientByNameController = new UpdateClientByNameController();

router.post("/cities", createCityController.handle);
router.get("/cities/names/:name", findCityByNameController.handle);
router.get("/cities/states/:state", findCityByStateController.handle);

router.post("/clients", createClientController.handle);
router.get("/clients", findClientsController.handle);
router.get("/clients/names/:full_name", findClientByNameController.handle);
router.get("/clients/:id", findClientByIdController.handle);
router.delete("/clients/:id", removeClientController.handle);
router.put("/clients/:id", updateClientByNameController.handle);
