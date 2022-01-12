import { Request } from "express";
import { container } from "tsyringe";
import { UpdateResult } from "typeorm";
import { UpdateClientByNameUseCase } from "./UpdateClientByNameUseCase";

export class UpdateClientByNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const updateClientBynameUseCase = container.resolve(
      UpdateClientByNameUseCase
    );

    const client = (await updateClientBynameUseCase.execute(
      id,
      name
    )) as UpdateResult;

    return response.json(client);
  }
}
