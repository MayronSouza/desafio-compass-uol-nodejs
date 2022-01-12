import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindClientByNameUseCase } from "./FindClientByNameUseCase";

export class FindClientByNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { full_name }: any = request.params;

    const findClientByNameUseCase = container.resolve(FindClientByNameUseCase);

    const result = await findClientByNameUseCase.execute(full_name);

    return response.json(result);
  }
}
