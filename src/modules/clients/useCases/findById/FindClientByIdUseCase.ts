import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { Client } from "../../entities/Clients";
import { IClientRepository } from "../../repositories/IClientRepository";

@injectable()
export class FindClientByIdUseCase {
  constructor(
    @inject("PostgresClientRepository")
    private postgresClientRepository: IClientRepository
  ) {}

  async execute(id: string): Promise<Client> {
    const client = await this.postgresClientRepository.findById(id);

    if (!client) {
      throw new AppError("Client doesn't exist!", 422);
    }

    return client;
  }
}
