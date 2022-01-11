import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { Client } from "../../entities/Clients";
import { IClientRepository } from "../../repositories/IClientRepository";

interface IRequest {
  full_name: string;
  gender: string;
  birth_date: Date;
  age: number;
  city_id: string;
}

@injectable()
export class CreateClientUseCase {
  constructor(
    @inject("PostgresClientRepository")
    private postgresClientRepository: IClientRepository
  ) {}

  async execute(data: IRequest): Promise<any> {
    const clientExists = await this.postgresClientRepository.findByName(
      data.full_name
    );

    if (clientExists) {
      throw new AppError("Client already exists!");
    }

    const client = await this.postgresClientRepository.create(data);

    return client;
  }
}
