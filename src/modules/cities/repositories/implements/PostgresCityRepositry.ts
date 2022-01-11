import { getRepository, Repository } from "typeorm";

import { City } from "../../entities/City";
import { ICityRepository, ICreateCityDTO } from "../ICityRepository";

export class PostgresCityRepository implements ICityRepository {
  private repository: Repository<City>;

  constructor() {
    this.repository = getRepository(City);
  }
  async create({ name, state }: ICreateCityDTO): Promise<void> {
    const city = this.repository.create({ name, state });

    await this.repository.save(city);
  }

  findByName(name: string): Promise<City> {
    throw new Error("Method not implemented.");
  }

  findByState(state: string): Promise<City> {
    throw new Error("Method not implemented.");
  }
}
