import { DeleteResult, UpdateResult } from "typeorm";
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
  }: IClientDTO): Promise<void>;
  find(): Promise<Client[]>;
  findByName(name: string): Promise<Client>;
  findById(id: string): Promise<Client>;
  remove(id: string): Promise<DeleteResult>;
  updateByName(client: Client): Promise<UpdateResult>;
}
