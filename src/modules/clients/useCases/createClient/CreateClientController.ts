import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const data = request.body;

    const createClientUseCase = container.resolve(CreateClientUseCase);

    await createClientUseCase.execute(data);

    return response.status(201).json();
  }
}
