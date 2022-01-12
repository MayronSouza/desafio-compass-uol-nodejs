import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveClientUseCase } from "./RemoveClientUseCase";

export class RemoveClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const removeClientUseCase = container.resolve(RemoveClientUseCase);

    const result = await removeClientUseCase.exceute(id);

    return response.json(result);
  }
}
