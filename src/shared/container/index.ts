import { container } from "tsyringe";

import { PostgresCityRepository } from "../../modules/cities/repositories/implements/PostgresCityRepositry";
import { ICityRepository } from "../../modules/cities/repositories/ICityRepository";

container.registerSingleton<ICityRepository>(
  "PostgresCityRepository",
  PostgresCityRepository
);
