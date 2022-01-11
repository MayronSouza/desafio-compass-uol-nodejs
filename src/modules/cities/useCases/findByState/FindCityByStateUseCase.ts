import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { City } from "../../entities/City";
import { ICityRepository } from "../../repositories/ICityRepository";

@injectable()
export class FindCityByStateUseCase {
  constructor(
    @inject("PostgresCityRepository")
    private postgresCityRepository: ICityRepository
  ) {}

  async execute(state: string): Promise<City[]> {
    const city = await this.postgresCityRepository.findByState(state);

    if (!city) {
      throw new AppError("City doesn't exist!", 422);
    }

    return city;
  }
}
