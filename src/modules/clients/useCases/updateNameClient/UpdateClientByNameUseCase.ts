import { inject, injectable } from "tsyringe";
import { UpdateResult } from "typeorm";
import { AppError } from "../../../../errors/AppError";
import { Client } from "../../entities/Clients";
import { PostgresClientRepository } from "../../repositories/implements/PostgresClientRepository";

@injectable()
export class UpdateClientByNameUseCase {
  constructor(
    @inject("PostgresClientRepository")
    private postgresClientRepository: PostgresClientRepository
  ) {}

  async execute(id: string, name: string): Promise<UpdateResult> {
    const clientExists = await this.postgresClientRepository.findById(id);

    if (!clientExists) {
      throw new AppError("Client doesn't exist", 422);
    }

    clientExists.full_name = name;

    const clientUpdated =
      this.postgresClientRepository.updateByName(clientExists);

    return clientUpdated;
  }
}
