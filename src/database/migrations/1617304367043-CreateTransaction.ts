import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateTransaction1617304367043 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'transactions',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'value',
                        type: 'decimal',
                        precision: 10,
                        scale: 2,
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'Timestamp',
                        default: 'now()',

                    },
                    {
                        name: 'updated_at',
                        type: 'Timestamp',
                        default: 'now()',
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('transactions');
    }

}
