import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindCityByStateUseCase } from "./FindCityByStateUseCase";

export class FindCityByStateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { state }: any = request.params;

    const findCityByStateUseCase = container.resolve(FindCityByStateUseCase);

    const result = await findCityByStateUseCase.execute(state);

    return response.json(result);
  }
}
