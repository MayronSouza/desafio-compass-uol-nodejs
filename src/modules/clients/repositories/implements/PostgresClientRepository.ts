import { getRepository, Repository } from "typeorm";

import { Client } from "../../entities/Clients";
import { IClientDTO, IClientRepository } from "../IClientRepository";

export class PostgresClientRepository implements IClientRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = getRepository(Client);
  }

  async create({
    full_name,
    gender,
    birth_date,
    age,
    city_id,
  }: any): Promise<any> {
    const client = this.repository.create({
      full_name,
      gender,
      birth_date,
      age,
      city_id,
    });

    const newClient = await this.repository.save(client);

    return newClient;
  }

  findByName(name: string): Promise<Client> {
    throw new Error("Method not implemented.");
  }

  findbyId(id: string): Promise<Client> {
    throw new Error("Method not implemented.");
  }

  remove(id: string): Promise<Client> {
    throw new Error("Method not implemented.");
  }

  updateName(id: string, name: string): Promise<Client> {
    throw new Error("Method not implemented.");
  }
}
