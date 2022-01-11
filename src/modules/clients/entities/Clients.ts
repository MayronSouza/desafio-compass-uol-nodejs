import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { City } from "../../cities/entities/City";

@Entity("clients")
export class Client {
  @PrimaryColumn()
  id: string;

  @Column()
  full_name: string;

  @Column()
  gender: string;

  @Column("date")
  birth_date: Date;

  @Column("integer")
  age: number;

  @ManyToOne(() => City)
  @JoinColumn({ name: "id" })
  city_id: City;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
