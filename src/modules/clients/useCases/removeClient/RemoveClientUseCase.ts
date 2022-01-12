import { inject, injectable } from "tsyringe";
import { DeleteResult } from "typeorm";

import { AppError } from "../../../../errors/AppError";
import { PostgresClientRepository } from "../../repositories/implements/PostgresClientRepository";

interface IResultProps {
  raw: [""];
  affected?: number;
}

@injectable()
export class RemoveClientUseCase {
  constructor(
    @inject("PostgresClientRepository")
    private postgresClientRepository: PostgresClientRepository
  ) {}

  async exceute(id: string): Promise<DeleteResult> {
    const client = (await this.postgresClientRepository.remove(
      id
    )) as IResultProps;

    if (client.affected === 0) {
      throw new AppError("Client doesn't exist!", 422);
    }

    return {
      raw: [{ message: "Client deleted with success!" }],
      affected: client.affected,
    };
  }
}
