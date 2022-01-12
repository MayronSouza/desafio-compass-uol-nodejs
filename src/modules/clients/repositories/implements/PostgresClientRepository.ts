import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";

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
  }: any): Promise<void> {
    const client = this.repository.create({
      full_name,
      gender,
      birth_date,
      age,
      city_id,
    });

    await this.repository.save(client);
  }

  async find(): Promise<Client[]> {
    const clients = await this.repository.find();

    return clients;
  }

  async findByName(full_name: string): Promise<Client> {
    const client = await this.repository.findOne({ full_name });

    return client;
  }

  async findById(id: string): Promise<Client> {
    const client = await this.repository.findOne({ id });

    return client;
  }

  async remove(id: string): Promise<DeleteResult> {
    const client = await this.repository.delete({ id });

    return client;
  }

  async updateByName(client: Client): Promise<UpdateResult> {
    const clientUpdated = await this.repository.update(client.id, client);

    return clientUpdated;
  }
}
