import { Router } from "express";
import { cityRouter } from "./cities.routes";

export const router = Router();

router.use("/cities", cityRouter);
