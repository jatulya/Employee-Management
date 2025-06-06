import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedDepartmentEntity1747981589057 implements MigrationInterface {
    name = 'AddedDepartmentEntity1747981589057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "department" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "address" ADD "house_no" character varying NOT NULL DEFAULT 'house 1'`);
        await queryRunner.query(`ALTER TABLE "address" ADD "line2" character varying NOT NULL DEFAULT 'Rajari Road'`);
        await queryRunner.query(`CREATE TYPE "public"."employee_status_enum" AS ENUM('INACTIVE', 'ACTIVE', 'PROBATION')`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "status" "public"."employee_status_enum" NOT NULL DEFAULT 'ACTIVE'`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "experience" integer NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "employee_id" character varying NOT NULL DEFAULT 'employee1'`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "date_of_joining" TIMESTAMP NOT NULL DEFAULT '2025-05-12'`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "department_id" integer`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_d62835db8c0aec1d18a5a927549" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_d62835db8c0aec1d18a5a927549"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "department_id"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "date_of_joining"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "employee_id"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "experience"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."employee_status_enum"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "line2"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "house_no"`);
        await queryRunner.query(`DROP TABLE "department"`);
    }

}
