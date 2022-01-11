import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { City } from "../../entities/City";
import { ICityRepository } from "../../repositories/ICityRepository";

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

  async execute({ name, state }: IRequest): Promise<City> {
    const cityExists = await this.postgresCityRepository.findByName(name);

    if (cityExists) {
      throw new AppError("City already exists!");
    }

    const city = await this.postgresCityRepository.create({
      name,
      state,
    });

    return city;
  }
}
