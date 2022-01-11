import { container } from "tsyringe";

import { PostgresCityRepository } from "../../modules/cities/repositories/implements/PostgresCityRepositry";
import { ICityRepository } from "../../modules/cities/repositories/ICityRepository";
import { PostgresClientRepository } from "../../modules/clients/repositories/implements/PostgresClientRepository";
import { IClientRepository } from "../../modules/clients/repositories/IClientRepository";

container.registerSingleton<ICityRepository>(
  "PostgresCityRepository",
  PostgresCityRepository
);

container.registerSingleton<IClientRepository>(
  "PostgresClientRepository",
  PostgresClientRepository
);
