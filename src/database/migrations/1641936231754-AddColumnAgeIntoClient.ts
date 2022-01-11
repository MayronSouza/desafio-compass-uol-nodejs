import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnAgeIntoClient1641936231754 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "clients",
      new TableColumn({
        name: "age",
        type: "integer",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("clients", "age");
  }
}
