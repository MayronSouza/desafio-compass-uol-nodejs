import { getRepository, Repository } from "typeorm";

import { City } from "../../entities/City";
import { ICityRepository, ICreateCityDTO } from "../ICityRepository";

export class PostgresCityRepository implements ICityRepository {
  private repository: Repository<City>;

  constructor() {
    this.repository = getRepository(City);
  }
  async create({ name, state }: ICreateCityDTO): Promise<City> {
    const city = this.repository.create({ name, state });

    const newCity = await this.repository.save(city);

    return newCity;
  }

  async findByName(name: string): Promise<City> {
    const city = await this.repository.findOne({ name });

    return city;
  }

  async findByState(state: string): Promise<City[]> {
    const city = await this.repository.find({ state });

    return city;
  }
}
