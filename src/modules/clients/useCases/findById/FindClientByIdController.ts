import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindClientByIdUseCase } from "./FindClientByIdUseCase";

export class FindClientByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id }: any = request.params;

    const findClientByIdUseCase = container.resolve(FindClientByIdUseCase);

    const result = await findClientByIdUseCase.execute(id);

    return response.json(result);
  }
}
