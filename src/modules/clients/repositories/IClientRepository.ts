import { Client } from "../entities/Clients";

export interface IClientDTO {
  full_name: string;
  gender: string;
  birth_date: any;
  age: number;
  city_id: string;
}

export interface IClientRepository {
  create({
    full_name,
    gender,
    birth_date,
    age,
    city_id,
  }: IClientDTO): Promise<Client>;
  findByName(name: string): Promise<Client>;
  findbyId(id: string): Promise<Client>;
  remove(id: string): Promise<Client>;
  updateName(id: string, name: string): Promise<Client>;
}
