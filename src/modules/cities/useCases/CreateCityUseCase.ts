import { inject, injectable } from "tsyringe";

import { ICityRepository } from "../repositories/ICityRepository";

interface IRequest {
  name: string;
  state: string;
}

@injectable()
export class CreateCityUseCase {
  constructor(
    @inject("PostgresCityRepository")
    private postgresCityRepository: ICityRepository
  ) {}

  async execute({ name, state }: IRequest): Promise<void> {
    const cityExists = await this.postgresCityRepository.findByName(name);

    if (cityExists) {
      throw new Error("City already exists!");
    }

    await this.postgresCityRepository.create({
      name,
      state,
    });
  }
}
