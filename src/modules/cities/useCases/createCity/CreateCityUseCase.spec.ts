import "reflect-metadata";
import { AppError } from "../../../../errors/AppError";

import { ICityRepository } from "../../repositories/ICityRepository";
import { CityRepositoryInMemory } from "../../repositories/implements/CityRepositoryInMemory";
import { CreateCityUseCase } from "./CreateCityUseCase";

describe("Create City", () => {
  let cityRepositoryInMemory: ICityRepository;
  let createCityUseCase: CreateCityUseCase;

  beforeAll(() => {
    cityRepositoryInMemory = new CityRepositoryInMemory();
    createCityUseCase = new CreateCityUseCase(cityRepositoryInMemory);
  });

  it("should be able create a new city", async () => {
    const cityData = {
      id: "1",
      name: "Porto",
      state: "PI",
      created_at: new Date(),
    };

    const city = await createCityUseCase.execute(cityData);

    expect(city).toHaveProperty("id");
  });

  it("should not be able to create an existed user", async () => {
    const cityData = {
      id: "2",
      name: "Chapadinha",
      state: "MA",
      created_at: new Date(),
    };

    await createCityUseCase.execute(cityData);

    await expect(createCityUseCase.execute(cityData)).rejects.toEqual(
      new AppError("City already exists!")
    );
  });
});
