import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { City } from "../../entities/City";
import { ICityRepository } from "../../repositories/ICityRepository";

interface IRequest {
  name: string;
}

@injectable()
export class FindCityByNameUseCase {
  constructor(
    @inject("PostgresCityRepository")
    private postgresCityRepository: ICityRepository
  ) {}

  async execute(name: string): Promise<City> {
    const city = await this.postgresCityRepository.findByName(name);

    if (!city) {
      throw new AppError("City doesn't exist!", 422);
    }

    return city;
  }
}
