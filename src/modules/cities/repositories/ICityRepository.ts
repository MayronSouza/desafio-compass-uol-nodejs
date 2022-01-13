import { City } from "../entities/City";

export interface ICreateCityDTO {
  id?: string;
  name: string;
  state: string;
  created_at?: Date;
}

export interface ICityRepository {
  create({ name, state }: ICreateCityDTO): Promise<City>;
  findByName(name: string): Promise<City>;
  findByState(state: string): Promise<City[]>;
}
