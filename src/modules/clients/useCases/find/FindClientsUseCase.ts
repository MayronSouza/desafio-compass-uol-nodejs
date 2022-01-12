import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Client } from "../../entities/Clients";
import { PostgresClientRepository } from "../../repositories/implements/PostgresClientRepository";

@injectable()
export class FindClientsUseCase {
  constructor(
    @inject("PostgresClientRepository")
    private postgresClientRepository: PostgresClientRepository
  ) {}

  async execute(): Promise<Client[]> {
    const clients = await this.postgresClientRepository.find();

    if (clients.length === 0) {
      throw new AppError("Doesn't exist clients!", 422);
    }

    return clients;
  }
}
