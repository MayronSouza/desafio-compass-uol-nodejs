import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindCityByNameUseCase } from "./FindCityByNameUseCase";

export class FindCityByNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name }: any = request.params;

    const findCityByNameUseCase = container.resolve(FindCityByNameUseCase);

    const result = await findCityByNameUseCase.execute(name);

    return response.json(result);
  }
}
