import "reflect-metadata";
import express from "express";

import "./database";
import "./shared/container";

import { router } from "./routes";

export const app = express();

app.use(express.json());
app.use(router);
