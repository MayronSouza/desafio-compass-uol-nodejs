import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { Client } from "../../entities/Clients";
import { IClientRepository } from "../../repositories/IClientRepository";

interface IRequest {
  full_name: string;
}

@injectable()
export class FindClientByNameUseCase {
  constructor(
    @inject("PostgresClientRepository")
    private postgresClientRepository: IClientRepository
  ) {}

  async execute(full_name: string): Promise<Client> {
    const client = await this.postgresClientRepository.findByName(full_name);

    if (!client) {
      throw new AppError("Client doesn't exist!", 422);
    }

    return client;
  }
}
