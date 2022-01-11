import { City } from "../entities/City";

export interface ICreateCityDTO {
  name: string;
  state: string;
}

export interface ICityRepository {
  create({ name, state }: ICreateCityDTO): Promise<City>;
  findByName(name: string): Promise<City>;
  findByState(state: string): Promise<City>;
}
