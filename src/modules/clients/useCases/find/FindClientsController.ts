import { Request } from "express";
import { container } from "tsyringe";
import { FindClientsUseCase } from "./FindClientsUseCase";

export class FindClientsCotroller {
  async handle(request: Request, response: Response): Promise<Response> {
    const findClientsUseCase = container.resolve(FindClientsUseCase);

    const clients = await findClientsUseCase.execute();

    return response.json(clients);
  }
}
