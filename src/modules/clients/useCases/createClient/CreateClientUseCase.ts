import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { Client } from "../../entities/Clients";
import { IClientRepository } from "../../repositories/IClientRepository";

interface IRequest {
  full_name: string;
  gender: string;
  birth_date: any;
  age: number;
  city_id: string;
}

@injectable()
export class CreateClientUseCase {
  constructor(
    @inject("PostgresClientRepository")
    private postgresClientRepository: IClientRepository
  ) {}

  async execute({
    full_name,
    gender,
    birth_date,
    age,
    city_id,
  }: IRequest): Promise<any> {
    const clientExists = await this.postgresClientRepository.findByName(
      full_name
    );

    if (clientExists) {
      throw new AppError("Client already exists!");
    }

    birth_date = new Date(birth_date);

    const client = await this.postgresClientRepository.create({
      full_name,
      gender,
      birth_date,
      age,
      city_id,
    });

    return client;
  }
}
