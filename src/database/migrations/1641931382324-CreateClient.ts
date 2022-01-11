import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateClient1641931382324 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clients",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "full_name",
            type: "varchar",
          },
          {
            name: "gender",
            type: "varchar",
          },
          {
            name: "birth_date",
            type: "timestamp",
          },
          {
            name: "city_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "clients",
      new TableForeignKey({
        name: "CityClient",
        columnNames: ["city_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "cities",
        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("clients", "CityClient");

    await queryRunner.dropTable("clients");
  }
}
