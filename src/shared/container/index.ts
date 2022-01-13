import { container } from "tsyringe";

import { PostgresCityRepository } from "../../modules/cities/repositories/implements/PostgresCityRepositry";
import { ICityRepository } from "../../modules/cities/repositories/ICityRepository";
import { PostgresClientRepository } from "../../modules/clients/repositories/implements/PostgresClientRepository";
import { IClientRepository } from "../../modules/clients/repositories/IClientRepository";
import { CityRepositoryInMemory } from "../../modules/cities/repositories/implements/CityRepositoryInMemory";

container.registerSingleton<ICityRepository>(
  "PostgresCityRepository",
  PostgresCityRepository
);

container.registerSingleton<ICityRepository>(
  "CityRepositoryInMemory",
  CityRepositoryInMemory
);

container.registerSingleton<IClientRepository>(
  "PostgresClientRepository",
  PostgresClientRepository
);
