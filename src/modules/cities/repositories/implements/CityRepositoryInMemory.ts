import { v4 as uuidV4 } from "uuid";

import { City } from "../../entities/City";
import { ICityRepository, ICreateCityDTO } from "../ICityRepository";

export class CityRepositoryInMemory implements ICityRepository {
  private cities: City[] = [];

  async create(city: ICreateCityDTO): Promise<City> {
    Object.assign(city, {
      id: uuidV4(),
      created_at: new Date(),
    });

    await this.cities.push(city);

    return city;
  }

  async findByName(name: string): Promise<City> {
    const city = await this.cities.filter((city) => city.name === name);

    return city[0];
  }

  async findByState(state: string): Promise<City[]> {
    const city = await this.cities.filter((city) => city.state === state);

    return city;
  }
}
